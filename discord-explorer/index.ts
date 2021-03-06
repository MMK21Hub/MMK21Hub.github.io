// DiscordRender - View Discord channel exports right in your browser.

interface message {
    id: string
    type: string
    author: user
    timestamp: string
    timestampEdited?: string | null
    callEndedTimestamp?: null
    isPinned?: boolean
    content: string
    attachments: Array<attachment>
    embeds: Array<embed>
    reactions: Array<reaction>
    mentions: Array<any>
}

interface user {
    id: string
    name: string
    discriminator: string
    isBot: boolean
    avatarUrl: string
}

interface attachment {
    id: string
    url: string
    fileName: string
    fileSizeBytes: number
}

interface embed {
    // Embeds are not supported yet
}

interface reaction {
    emoji: emoji
    count: number
}

interface emoji {
    id: null
    name: string
    isAnimated: boolean
    imageUrl: string
}

// Help tooltips:
const helpTooltips = {
    chatlog: "The chatlog - This is where all the messages show up.",
    sidebar: "The sidebar - Switch between different channels here.",
    top_bar:
        "Top app bar - The title of your current screen and quick actions are here.",
    message_card: "This is a discord message.",
}

// Channels:
const channelList = [
    {
        id: "727912383833702411",
        name: "general",
    },
    {
        id: "793448224353550346",
        name: "mind-is-tree",
    },
]

let currentChannel: { data?: any[]; id?: string } = {}
let loadedChunks = 0
let zenState: "none" | "sidebar" | "content" = "none"
const currentURL = new URL(window.location.href)
let cursorsStylesheet: HTMLStyleElement | null = null

/** @deprecated Use $.ajax() for HTTP(S) requests */
function request(filePath: string) {
    // https://stackoverflow.com/a/41133213/11519302
    var result = null
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", filePath, false)
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    xmlhttp.send()
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText
    }
    return result
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function overrideClick(event: any) {
    const hasModifiers =
        event.metaKey || event.shiftKey || event.altKey || event.ctrlKey
    if (hasModifiers || event.button !== 0) return
    event.preventDefault()
}

// Render an array of messages:
const renderContent = async (messages: []) => {
    var chunkedMessages = []
    if (messages.length >= 100) {
        // Split the array into chunks if it's big
        let chunks = Math.ceil(messages.length / 100)
        var i: number
        for (i = 0; i < chunks; i++) {
            chunkedMessages.push(messages.slice(i * 100, i * 100 + 100))
        }
        console.log(
            "Split " +
                messages.length +
                " messages into " +
                chunkedMessages.length +
                " chunks"
        )
    } else {
        // Put the whole thing into one chunk if it's not big
        chunkedMessages = [messages]
    }
    currentChannel.data = chunkedMessages

    let currentChunk = 0
    let chunk
    chunk = chunkedMessages[currentChunk]

    // Render the first chunk:
    renderChunk(0)
    $("#chatlog").show()
}

function renderMessage(msg: message, chunkElement: HTMLElement) {
    let messageCard = document.createElement("div") // Prepare the new msg card
    messageCard.setAttribute("class", "message-card")
    messageCard.setAttribute("id", "msg-" + msg.id)
    messageCard.innerText = msg.content
    chunkElement.appendChild(messageCard) // Add the msg card to the chatlog
}

// Get a saved Discord channel and give it to renderContent():
const renderChannel = async (id: string) => {
    currentURL.searchParams.set("channel", id.toString())
    history.replaceState(null, null, currentURL.search) // Update the URL
    $("#chatlog") // Reset the chatlog before rendering the new messages
        .html("")
        .scrollTop(0)
    $("body").css("cursor", "wait")
    const rule = cursorsStylesheet.sheet.insertRule(`\
    html body {
        --cursor-pointer: wait;
    }
    `)

    currentChannel.id = id
    const startTime = performance.now()
    const channelData = await $.getJSON("assets/" + id + ".json")
    const duration = performance.now() - startTime

    console.log(`Getting and parsing the JSON took ${Math.round(duration)}ms`)
    renderContent(channelData.messages)
    $("body").css("cursor", "")
    cursorsStylesheet.sheet.deleteRule(rule)
}

function renderChunk(chunkIndex: number) {
    const chunk: Array<message> = currentChannel.data[chunkIndex]

    let chunkDiv = document.createElement("div")
    chunkDiv.setAttribute("class", "chunk")
    chunkDiv.setAttribute("id", "chunk-" + chunkIndex)
    $("#chatlog").append(chunkDiv)

    let currentMsg
    for (currentMsg of chunk) {
        // Parse each message
        renderMessage(currentMsg, chunkDiv)
        $("#progress").html("Rendering " + chunk.length + " messages")
    }
    loadedChunks = loadedChunks + 1

    fixViewport()
    console.log(
        "Finished rendering chunk " +
            chunkIndex +
            " (" +
            chunk.length +
            " messages)"
    )
    $("#progress").hide()
    $("#chatlog")[0].focus()
}

// Fix height of chatlog:
function fixViewport() {
    //let correctHeightChatlog = $("#main-content").height() - 25
    //$("#chatlog").css("height", correctHeightChatlog.toString() + "px")
    $("#left-menu").css("height", window.innerHeight.toString() + "px")
    $("#chatlog").css("height", (window.innerHeight - 40).toString() + "px")

    if ($(window).width() < 600 && zenState !== "content") {
        zenSidebar()
    } else if ($(window).width() > 600) {
        zenNone()
    }

    if ($("#main-content").width() < 650) {
        $("#chatlog").addClass("fullwidth")
    } else {
        $("#chatlog").removeClass("fullwidth")
    }
}

import "./index.scss"

$(() => {
    $(window).on("resize", fixViewport)
    fixViewport()
    loadSidebar()

    cursorsStylesheet = document.querySelector("style#cursors")

    const channelID = currentURL.searchParams.get("channel")
    if (channelID) {
        let channelFound = false
        for (let i of channelList) {
            if (i.id == channelID) {
                channelFound = true
            }
        }
        if (channelFound) {
            renderChannel(channelID)
            $(`[data-channel-id=${channelID}]`)[0].setAttribute("selected", "")
            zenState == "sidebar" ? zenContent() : null
        } else {
            console.warn("Invalid channel ID found in URL: " + channelID)
        }
    }
})

function checkStatuses() {
    let downStatuses: string[] = []
    $.getJSON(
        "https://rocky-castle-55647.herokuapp.com/https://status.mojang.com/check",
        (data) => {
            if (data[0]["minecraft.net"] != "green") {
                downStatuses.push("minecraft.net")
            }
            if (data[1]["session.minecraft.net"] != "green") {
                downStatuses.push("session.minecraft.net")
            }
            if (data[2]["account.mojang.com"] != "green") {
                downStatuses.push("account.mojang.com")
            }
            if (data[3]["authserver.mojang.com"] != "green") {
                downStatuses.push("authserver.mojang.com")
            }
            if (data[5]["api.mojang.com"] != "green") {
                downStatuses.push("api.mojang.com")
            }
            if (data[6]["textures.minecraft.net"] != "green") {
                downStatuses.push("textures.minecraft.net")
            }
            if (data[7]["mojang.com"] != "green") {
                downStatuses.push("mojang.com")
            }
        }
    )

    $.getJSON(
        "https://kctbh9vrtdwd.statuspage.io/api/v2/status.json",
        (data) => {
            if (data.status.indicator == "major") {
                downStatuses.push("github.com")
            }
        }
    )

    $.getJSON(
        "https://kctbh9vrtdwd.statuspage.io/api/v2/components.json",
        (data) => {
            if (data.components[8].status != "operational") {
                downStatuses.push("github.io")
            }
        }
    )

    return downStatuses
}

const statuses = checkStatuses()
if (statuses.length != 0) {
    /* Might enable this later
    let i
    for (i of statuses) {
        if (i == "github.io") {
            console.warn(
                "Github Pages is reporting reduced performance. You may experience slow load times or server errors."
            )
        }
    }
    */
    console.warn(
        "One or more services are reporting degraded performance or an outage.",
        statuses
    )
}

function loadChunk(chunkIndex: number) {
    console.log("Load chunk ", chunkIndex)
}

// Lazy loading of message chunks:
let loadingMessages = false
$("#chatlog").on("scroll", function () {
    if (loadedChunks >= currentChannel.data.length) return
    const scrollPosition = $("#chatlog").scrollTop()
    const fullHeight = document.getElementById("chatlog").scrollHeight
    const height = $("#chatlog").height()
    const scrollPercent = (scrollPosition / (fullHeight - height)) * 100

    let threshold = 95
    if (loadedChunks >= 10) {
        threshold = 99
    } else if (loadedChunks >= 20) {
        threshold = 100
    }
    if (scrollPercent >= 95 && !loadingMessages) {
        loadingMessages = true
        renderChunk(loadedChunks)
        setTimeout(() => {
            loadingMessages = false
        }, 10)
    }
})

function loadSidebar() {
    // Create the sidebar items
    $("#left-menu").append($('<ul id="channels"></ul>'))
    for (const channel of channelList) {
        let button = $(`
            <li class="sidebar-item">
                <a class="channel-label" href="?channel=${channel.id}"> ${channel.name} </a>
            </li>
        `)
        button[0].dataset.channelId = channel.id
        $("#channels").append(button)
    }

    // Add the event listeners
    $(".sidebar-item").on("click", (ctx) => {
        overrideClick(ctx)
        $(".sidebar-item[selected]").attr("selected", null)
        renderChannel(ctx.target.parentElement.dataset.channelId.toString())
        ctx.target.parentElement.setAttribute("selected", "")

        zenState == "sidebar" ? zenContent() : null
    })
}

function zenSidebar() {
    if (zenState !== "sidebar") {
        $("#inner-box").css("grid-template-areas", '"sidebar"')
        $("#inner-box").css("grid-template-columns", "unset")
        $("#main-content").hide()
        $("#left-menu").show()
        zenState = "sidebar"
    }
}

function zenContent() {
    if (zenState !== "content") {
        $("#inner-box").css("grid-template-areas", '"main"')
        $("#inner-box").css("grid-template-columns", "unset")
        $("#left-menu").hide()
        $("#main-content").show()
        zenState = "content"
    }
}

function zenNone() {
    if (zenState !== "none") {
        $("#inner-box").css("grid-template-areas", "")
        $("#inner-box").css("grid-template-columns", "")
        $("#left-menu").show()
        $("#main-content").show()
        zenState = "none"
    }
}
