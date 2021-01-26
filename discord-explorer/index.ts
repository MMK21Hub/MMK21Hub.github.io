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
let helpTooltips = {
    chatlog: "The chatlog - This is where all the messages show up.",
    sidebar: "The sidebar - Switch between different channels here.",
    top_bar:
        "Top app bar - The title of your current screen and quick actions are here.",
    message_card: "This is a discord message.",
}

// Channels:
let channelList = [
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
let renderChannel = async (id: string) => {
    $("#chatlog") // Reset the chatlog before rendering the new messages
        .html("")
        .scrollTop(0)
    $("body").css("cursor", "wait")
    currentChannel.id = id
    const startTime = performance.now()
    let channelData = await $.getJSON("assets/" + id + ".json")
    const duration = performance.now() - startTime
    console.log(`Getting and parsing the JSON took ${Math.round(duration)}ms`)
    renderContent(channelData.messages)
    $("body").css("cursor", "")
}

function renderChunk(chunkIndex: number) {
    let chunk: Array<message> = currentChannel.data[chunkIndex]

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
}

// Fix height of chatlog:
function fixViewport() {
    //let correctHeightChatlog = $("#main-content").height() - 25
    //$("#chatlog").css("height", correctHeightChatlog.toString() + "px")
    $("#left-menu").css("height", window.innerHeight.toString() + "px")
    $("#chatlog").css("height", (window.innerHeight - 40).toString() + "px")
}

$(() => {
    $(window).on("resize", fixViewport)
    loadSidebar()
})

function checkStatuses() {
    let downStatuses = []
    let mojangStatus = JSON.parse(
        request(
            "https://rocky-castle-55647.herokuapp.com/https://status.mojang.com/check"
        )
    )

    if (mojangStatus[0]["minecraft.net"] != "green") {
        downStatuses.push("minecraft.net")
    }
    if (mojangStatus[1]["session.minecraft.net"] != "green") {
        downStatuses.push("session.minecraft.net")
    }
    if (mojangStatus[2]["account.mojang.com"] != "green") {
        downStatuses.push("account.mojang.com")
    }
    if (mojangStatus[3]["authserver.mojang.com"] != "green") {
        downStatuses.push("authserver.mojang.com")
    }
    if (mojangStatus[5]["api.mojang.com"] != "green") {
        downStatuses.push("api.mojang.com")
    }
    if (mojangStatus[6]["textures.minecraft.net"] != "green") {
        downStatuses.push("textures.minecraft.net")
    }
    if (mojangStatus[7]["mojang.com"] != "green") {
        downStatuses.push("mojang.com")
    }

    let githubStatus = JSON.parse(
        request("https://kctbh9vrtdwd.statuspage.io/api/v2/status.json")
    )
    if (githubStatus.status.indicator == "major") {
        downStatuses.push("github.com")
    }
    githubStatus = JSON.parse(
        request("https://kctbh9vrtdwd.statuspage.io/api/v2/components.json")
    )
    if (githubStatus.components[8].status != "operational") {
        downStatuses.push("github.io")
    }

    return downStatuses
}

let statuses = checkStatuses()
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
    let scrollPosition = $("#chatlog").scrollTop()
    let fullHeight = document.getElementById("chatlog").scrollHeight
    let height = $("#chatlog").height()
    let scrollPercent = (scrollPosition / (fullHeight - height)) * 100

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
    $("#left-menu").append($('<div id="channels"></div>'))
    for (const channel of channelList) {
        let button = $(`
            <div class="sidebar-item">
                <a class="channel-label" href="#"> ${channel.name} </a>
            </div>
        `)
        button[0].dataset.channelId = channel.id
        $("#channels").append(button)
    }

    // Add the event listeners
    $(".sidebar-item").on("click", function (ctx) {
        $(".sidebar-item[selected]").attr("selected", null)
        renderChannel(ctx.target.parentElement.dataset.channelId.toString())
        ctx.target.parentElement.setAttribute("selected", "")
    })
}
