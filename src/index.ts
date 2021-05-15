/*

#=================================#
#        DISCORD EXPLORER:        #
# View Discord channel exports in #
#          your browser!          #
#=================================#

Repo: https://github.com/MMK21Hub/MMK21Hub.github.io
Author: MMK21 & contributors

== Contents ==
 - Typescript Stuff
 - Imports
 - Variables
 - Functions
 - Message Rendering
 - User Interface
 - Other Bits

*/

/* =========   
    IMPORTS    
   ========= */

import { ContextKeys } from "./context-keys"

// Snowpack will handle these imports, but TS doesn't support URL imports yet.
// For now we have to `ts-ignore` them.
// P.S. The scary URLs are called 'pinned' URLs; Skypack generates them for us.
// @ts-ignore
import contextKeys from "https://cdn.skypack.dev/pin/context-keys@v3.1.0-p8ds1ae5xyZAdYHlICUO/mode=imports,min/optimized/context-keys.js"
// @ts-ignore
import * as Sentry from "https://cdn.skypack.dev/pin/@sentry/browser@v6.3.6-WidkolDfgWFbwsjpgQsM/mode=imports,min/optimized/@sentry/browser.js"
// @ts-ignore
import { Integrations } from "https://cdn.skypack.dev/pin/@sentry/tracing@v6.3.6-72C9F2EYsOnu6XdC01yr/mode=imports,min/optimized/@sentry/tracing.js"
// @ts-ignore
import * as _ from "https://cdn.skypack.dev/pin/lodash@v4.17.21-K6GEbP02mWFnLA45zAmi/mode=imports,min/optimized/lodash.js"

/* ==================   
    TYPESCRIPT STUFF    
   ================== */

declare global {
    interface Window {
        /** Context Keys base object
         * @see https://github.com/fabiospampinato/context-keys
         */
        ck: ContextKeys
    }
}

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

interface channel {
    id: string
    name: string
}

/* ===========   
    VARIABLES    
   =========== */

// Help tooltips:
const helpTooltips = {
    chatlog: "The chatlog - This is where all the messages show up.",
    sidebar: "The sidebar - Switch between different channels here.",
    top_bar:
        "Top app bar - The title of your current screen and quick actions are here.",
    message_card: "This is a discord message.",
}

// Channels:
let channelList: channel[] | null = null

// Enabled features:
let featureFlags = {
    tooltips: false,
    viewbar: false,
    smartChunkLoading: false,
    progressBar: false,
    backToSidebar: false,
}

/** Shorthand to the `window` object */
const w = window

let currentChannel: { data: any[] | null } = {
    data: null,
}
let loadedChunks = 0
// currentChunk is `null` because no channel is loaded yet:
let currentChunk: null | number = null

const currentURL = new URL(window.location.href)
let cursorsStylesheet: HTMLStyleElement | null = null
let rule: number

const context = checkContext()

const events = {
    beforeChannelLoad: (id: string) => {
        // Set the context key:
        w.ck.set("channelLoading", true)

        // Update the URL:
        currentURL.searchParams.set("channel", id.toString())
        history.replaceState(null, "", currentURL.search)

        // Reset the chatlog before rendering the new messages:
        $("#chatlog").html("").scrollTop(0)

        // Update the curser to a spinning wheel:
        $("body").css("cursor", "wait")
        const rule = cursorsStylesheet.sheet.insertRule(`\
        html body {
            --cursor-pointer: wait;
        }
        `)
    },
    afterChannelLoad: (id: string) => {
        if (!channelList) return console.assert(channelList)

        // Set the context keys:
        w.ck.set("channelLoading", false)
        w.ck.set("channelLoaded", true)

        // Update the title
        for (let channel of channelList) {
            if (channel.id === id) {
                document.title = `#${channel.name} - Discord Explorer`
            }
        }

        // Remove the spinning wheel cursor
        $("body").css("cursor", "")
        cursorsStylesheet.sheet.deleteRule(rule)
    },
}

const corsEverywhere = "https://rocky-castle-55647.herokuapp.com/"

/* ===========   
    FUNCTIONS    
   =========== */

/** @deprecated Use $.ajax() for HTTP(S) requests */
function request(filePath: string) {
    // https://stackoverflow.com/a/41133213/11519302
    var result = null
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", filePath, false)
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    xmlhttp.send()
    if (xmlhttp.status === 200) {
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

function startTimer(name: string) {
    if (context.prod) return
    console.time(name)
}

function endTimer(name: string) {
    if (context.prod) return
    console.timeEnd(name)
}

/* ===================   
    MESSAGE RENDERING    
   =================== */

/** Gets the channel list then calls checkURL() and loadSidebar() */
function getChannelList() {
    $.getJSON(
        "https://raw.githubusercontent.com/MMK21Hub/discord-channels/master/servers/knowledge-base/current/index.json",
        (data) => {
            channelList = data
            loadSidebar()
            checkURL()
        }
    )
}

/** If there's a channel ID specified in the URL params, load that channel. */
function checkURL() {
    if (!channelList)
        return console.error(
            "The channel list hasn't loaded for some reason; expect bugs."
        )

    // Check if there's a `channel` URL parameter in the current URL
    const channelID = currentURL.searchParams.get("channel")
    if (!channelID) return

    /** Represents the channel from the URL that needs to be loaded.
     * If `undefined`, there is no channel to match the channel ID in the URL */
    let channel: channel | undefined

    // Return if the channel ID does not match an actual channel
    for (let i of channelList) {
        if (i.id === channelID) {
            channel = i
        }
    }
    if (!channel) {
        console.warn("Invalid channel ID found in URL: " + channelID)
        return
    }

    if (!context.bot) {
        renderChannel(channelID)
        $(`[data-channel-id=${channelID}]`)[0].setAttribute("selected", "")
    }

    // Update OG tags:
    $("meta[property='og:title']").prop(
        "content",
        `${channel.name} - Discord Explorer`
    )
}

/** Get a saved Discord channel and give it to `renderContent()` */
const renderChannel = async (id: string) => {
    // Type safety:
    if (!channelList)
        return console.error(
            "The channel list hasn't loaded for some reason; expect bugs."
        )

    // Fire the `beforeChannelLoad` event:
    events.beforeChannelLoad(id)

    // Get the channel data:
    startTimer("get-json")
    const channelData = await $.getJSON(
        "https://raw.githubusercontent.com/MMK21Hub/discord-channels/master/servers/knowledge-base/current/" +
            id +
            ".json"
    )
    endTimer("get-json")

    // Split the channel's messages into chunks
    currentChannel.data = splitChannelIntoChunks(channelData)

    // Render the first chunk of messages:
    renderChunk(0)

    // Fire the `afterChannelLoad` event:
    events.afterChannelLoad(id)
}

function splitChannelIntoChunks(
    channelData: { messages: [] },
    chunkSize = 100
) {
    // TODO: Get a proper type for this parameter ^
    let chunkedMessages = []

    let totalChunks = Math.ceil(channelData.messages.length / chunkSize)
    for (let i of _.range(totalChunks)) {
        chunkedMessages.push(
            channelData.messages.slice(i * chunkSize, i * chunkSize + chunkSize)
        )
    }

    return chunkedMessages
}

/** Give each message from a chunk to `renderMessage()` */
function renderChunk(chunkIndex: number) {
    if (!currentChannel.data || !currentChannel.data.length)
        return console.error(
            "currentChannel.data is not available, so chunk loading has been aborted."
        )

    w.ck.set("chunkLoading", true)

    currentChunk = chunkIndex
    const chunk: message[] = currentChannel.data[chunkIndex]

    let chunkDiv = document.createElement("div")
    chunkDiv.setAttribute("class", "chunk")
    chunkDiv.setAttribute("id", "chunk-" + chunkIndex)
    $("#chatlog").append(chunkDiv)

    let currentMsg
    for (currentMsg of chunk) {
        // Parse each message
        chunkDiv.appendChild(renderMessage(currentMsg, chunkDiv))
        $("#progress").html("Rendering " + chunk.length + " messages")
    }
    loadedChunks = loadedChunks + 1

    w.ck.set("chunkLoading", false)
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

/** Generate a messageCard element from a Discord message */
function renderMessage(msg: message, chunkElement: HTMLElement) {
    let messageCard = document.createElement("div") // Prepare the new msg card
    messageCard.setAttribute("class", "message-card")
    messageCard.setAttribute("id", "msg-" + msg.id)
    messageCard.innerText = msg.content
    return messageCard
}

/* ================   
    USER INTERFACE    
   ================ */

function loadSidebar() {
    if (!channelList)
        return console.error(
            "The channel list hasn't loaded for some reason; expect bugs."
        )

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

    $("#sidebar-loading").hide()

    // Add the event listeners
    $(".sidebar-item").on("click", (ctx) => {
        if (!ctx.target?.parentElement?.dataset.channelId) {
            if (!ctx.target.parentElement) {
                return console.error(
                    "The sidebar item doesn't seem to have a parent - breaking DOM change?",
                    ctx.target
                )
            }
            if (!ctx.target.parentElement.dataset.channelID) {
                return console.error(
                    "The sidebar item's parent doesn't seem to have the `data-channel-id` property - breaking DOM change?",
                    ctx.target
                )
            }

            return console.error(
                "Something's wrong with the sidebar item event listener.",
                ctx
            )
        }

        overrideClick(ctx)
        $(".sidebar-item[selected]").attr("selected", null)
        renderChannel(ctx.target.parentElement.dataset.channelId.toString())
        ctx.target.parentElement.setAttribute("selected", "")
    })
}

// Lazy loading of message chunks:
let loadingMessages = false
let lazyLoadingFailed = false
$("#chatlog").on("scroll", function () {
    if (!currentChannel.data) {
        lazyLoadingFailed = true
        if (lazyLoadingFailed) return
        return console.error(
            "currentChannel.data is not available for some reason."
        )
    }
    if (loadedChunks >= currentChannel.data.length) return
    if (loadingMessages) return

    const chatlog = document.querySelector("#chatlog")
    if (!chatlog)
        return console.error(
            "No element with the ID `chatlog` - breaking DOM change?"
        )
    const scrollPosition = chatlog.scrollTop
    const fullHeight = chatlog.scrollHeight
    const height = chatlog.clientHeight
    const scrollPercent = (scrollPosition / (fullHeight - height)) * 100
    const threshold = calculateThreshold()

    if (scrollPercent >= threshold) {
        loadingMessages = true
        renderChunk(loadedChunks)
        setTimeout(() => {
            loadingMessages = false
        }, 10)
    }
})

function calculateThreshold() {
    if (loadedChunks >= 10) {
        return 99
    }
    if (loadedChunks >= 20) {
        return 100
    }

    return 95
}

/* ============   
    OTHER BITS    
   ============ */

/** Initiates Context Keys as `window.ck`. Called on DOM ready. */
function initCk() {
    window.ck = new contextKeys({
        channelLoaded: false,
        channelLoading: false,
        chunkLoading: false,
    })
}

/** Check if Mojang or Github is down
 * @returns An array of all the services that are down
 */
function checkStatuses() {
    let downStatuses: string[] = []

    // MINECRAFT
    $.getJSON(corsEverywhere + "https://status.mojang.com/check", (data) => {
        if (data[0]["minecraft.net"] !== "green") {
            downStatuses.push("minecraft.net")
        }
        if (data[1]["session.minecraft.net"] !== "green") {
            downStatuses.push("session.minecraft.net")
        }
        if (data[2]["account.mojang.com"] !== "green") {
            downStatuses.push("account.mojang.com")
        }
        if (data[3]["authserver.mojang.com"] !== "green") {
            downStatuses.push("authserver.mojang.com")
        }
        if (data[5]["api.mojang.com"] !== "green") {
            downStatuses.push("api.mojang.com")
        }
        if (data[6]["textures.minecraft.net"] !== "green") {
            downStatuses.push("textures.minecraft.net")
        }
        if (data[7]["mojang.com"] !== "green") {
            downStatuses.push("mojang.com")
        }
    })

    // GITHUB
    $.getJSON(
        "https://kctbh9vrtdwd.statuspage.io/api/v2/status.json",
        (data) => {
            if (data.status.indicator === "major") {
                downStatuses.push("github.com")
            }
        }
    )

    return downStatuses
}

/** Get some information about the user accessing the site */
function checkContext() {
    const context = {
        embedded: false,
        prod: true,
        electron: false,
        bot: false,
    }

    const botTest = /bot|googlebot|crawler|spider|robot|crawling/i

    if (botTest.test(navigator.userAgent)) {
        context.bot = true
    }

    switch (currentURL.hostname) {
        case "localhost":
        case "127.0.0.1":
            context.prod = false
            break
        case "discord-explorer.netlify.app":
        case "mmk21hub.github.io":
            context.prod = true
            break
        default:
            // Not being accessed form an official URL: is it in a frame?
            try {
                window.frameElement ? (context.embedded = true) : null
            } catch (error) {
                context.embedded = true
            }
            break
    }

    if (typeof process !== "undefined") {
        context.electron = true
    }

    return context
}

// THINGS TO DO WHEN THE DOM IS READY
$(() => {
    getChannelList()
    initCk()

    cursorsStylesheet = document.querySelector("style#cursors")

    addCustomEventListeners()

    // Set OG tag:
    $("meta[property='og:title']").prop("content", `Home - Discord Explorer`)

    // Print some debug info
    console.log("User context", context)
    console.log("Enabled feature flags", featureFlags)

    // Low Priority: Generate a warning in the console if a service reports an outage:
    const statuses = checkStatuses()
    if (!statuses) {
        console.warn(
            "One or more services are reporting degraded performance or an outage.",
            statuses
        )
    }
})

// Error tracking:
// https://sentry.io/organizations/mmk21
if (context.prod) {
    Sentry.init({
        dsn: "https://8278aa1a41d548e888b2ba35acba19ff@o557500.ingest.sentry.io/5689818",
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
    })
}
function addCustomEventListeners() {
    document.addEventListener("beforeChannelLoad", (e) => {})
}
