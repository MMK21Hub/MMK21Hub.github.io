// DiscordRender - View Discord channel exports right in your browser.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Some example messages for testing:
let messages = [
    {
        id: "728382034472468490",
        type: "Default",
        timestamp: "2020-07-02T22:50:09.702+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "lol I\u0027ve always just typed \u0022This channel is open!\u0022 and then pressed \u0060cntrl\u0060 \u002B \u0060a\u0060 and \u0060cntrl\u0060 \u002B \u0060b\u0060",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728382407421460590",
        type: "Default",
        timestamp: "2020-07-02T22:51:38.62+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "I didn\u0027t think of that",
        author: {
            id: "603662813524656180",
            name: "KodingKat",
            discriminator: "8639",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728382594038890556",
        type: "Default",
        timestamp: "2020-07-02T22:52:23.113+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "A long message to test word wrapping. fly relate house expert charge interview itself because job knowledge colour low late hope... AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728634998726590594",
        type: "Default",
        timestamp: "2020-07-03T15:35:21.08+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "This message has some <i>HTML</i> tags. <span onclick='window.alert(\"XSS\")'>Click me!</span>",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728635063209820202",
        type: "Default",
        timestamp: "2020-07-03T15:35:36.454+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "preferably lable all of the links as to what they do",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728638396393586769",
        type: "Default",
        timestamp: "2020-07-03T15:48:51.147+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "Found 2 new tools thx to you",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728638519073046657",
        type: "Default",
        timestamp: "2020-07-03T15:49:20.396+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "You know what I see never evers so often I may as well grab the Code Zealot vid",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728638579324223558",
        type: "Default",
        timestamp: "2020-07-03T15:49:34.761+00:00",
        timestampEdited: "2020-07-03T15:51:17.657+00:00",
        callEndedTimestamp: null,
        isPinned: false,
        content: "And also Timber Forge\u0027s NBT Crafting tutorial",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728639315613188117",
        type: "Default",
        timestamp: "2020-07-03T15:52:30.306+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "It was a good idea to invite you to this, suddenly this thing has evolved.",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728639554302509096",
        type: "Default",
        timestamp: "2020-07-03T15:53:27.214+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "can you remove\nVanilla Resource Pack - https://www.curseforge.com/minecraft/texture-packs/minecraft-resource-pack-template/files?sort=-game-version\nResource Pack Creator - https://minecraft.novaskin.me/resourcepacks\ntellraw - https://minecraftjson.com/\nColor Codes - https://minecraft.tools/en/color-code.php\nthe versions I have are better",
        author: {
            id: "603662813524656180",
            name: "KodingKat",
            discriminator: "8639",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728639634585813074",
        type: "Default",
        timestamp: "2020-07-03T15:53:46.355+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "k",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728639911237910528",
        type: "Default",
        timestamp: "2020-07-03T15:54:52.314+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "Wait you want me to remove the link you sent for Color Codes?",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728639961972080641",
        type: "Default",
        timestamp: "2020-07-03T15:55:04.41+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "That\u0027s your link, and it\u0027s all one message, so you\u0027d have to do that",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728640087834755132",
        type: "Default",
        timestamp: "2020-07-03T15:55:34.418+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "oops I meant yours",
        author: {
            id: "603662813524656180",
            name: "KodingKat",
            discriminator: "8639",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728640166201131018",
        type: "Default",
        timestamp: "2020-07-03T15:55:53.102+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "also could you try to shorten the titles so that it all fits on one line",
        author: {
            id: "603662813524656180",
            name: "KodingKat",
            discriminator: "8639",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
    {
        id: "728640692208926732",
        type: "Default",
        timestamp: "2020-07-03T15:57:58.512+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "Wait should I make differrent text channels for each category of tools?",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png",
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: [],
    },
];
let currentChannel = {};
let loadedChunks = 0;
function request(filePath) {
    // https://stackoverflow.com/a/41133213/11519302
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// Render an array of messages:
function renderContent(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        let chatlog = document.getElementById("chatlog");
        chatlog.innerHTML = ""; // Reset the chatlog before rendering the new messages
        var chunkedMessages = [];
        if (messages.length >= 100) {
            // Split the array into chunks if it's big
            let chunks = Math.ceil(messages.length / 100);
            var i;
            for (i = 0; i < chunks; i++) {
                chunkedMessages.push(messages.slice(i * 100, i * 100 + 100));
            }
            console.log("Split " +
                messages.length +
                " messages into " +
                chunkedMessages.length +
                " chunks");
        }
        else {
            // Put the whole thing into one chunk if it's not big
            chunkedMessages = [messages];
        }
        currentChannel.data = chunkedMessages;
        let currentChunk = 0;
        let chunk;
        chunk = chunkedMessages[currentChunk];
        // Parse each chunk:
        let currentMsg;
        for (currentMsg of chunk) {
            // Parse each message
            renderMessage(currentMsg);
            $("#progress").html("Rendering " + chunk.length + " messages");
        }
        loadedChunks = 1;
        fixViewport();
        console.log("Finished rendering chunk " +
            currentChunk +
            " (" +
            chunk.length +
            " messages)");
        $("#progress").hide();
        $("#chatlog").show();
    });
}
function renderMessage(msg) {
    let messageCard = document.createElement("div"); // Prepare the new msg card
    messageCard.setAttribute("class", "message-card");
    messageCard.setAttribute("id", "msg-" + msg.id);
    messageCard.innerHTML = escapeHtml(msg.content);
    document.getElementById("chatlog").appendChild(messageCard); // Add the msg card to the chatlog
}
// Get a saved Discord channel and give it to renderContent():
function renderChannel(id) {
    id = id.toString();
    currentChannel.id = id;
    const startTime = performance.now();
    let channelData = JSON.parse(request("assets/" + id + ".json"));
    const duration = performance.now() - startTime;
    console.log(`Getting and parsing the JSON took ${Math.round(duration)}ms`);
    renderContent(channelData.messages);
}
function renderChunk(chunkIndex) {
    let chunk = currentChannel.data[chunkIndex];
    let currentMsg;
    for (currentMsg of chunk) {
        // Parse each message
        renderMessage(currentMsg);
        $("#progress").html("Rendering " + chunk.length + " messages");
    }
    loadedChunks = loadedChunks + 1;
    fixViewport();
    console.log("Finished rendering chunk " +
        chunkIndex +
        " (" +
        chunk.length +
        " messages)");
    $("#progress").hide();
}
// Fix height of chatlog:
function fixViewport() {
    let correctHeightChatlog = document.getElementById("main-content").clientHeight - 25;
    document.getElementById("chatlog").style.height =
        correctHeightChatlog.toString() + "px";
    document.getElementById("left-menu").style.height =
        (window.innerHeight - 31).toString() + "px";
    document.getElementById("chatlog").style.height =
        (window.innerHeight - 40).toString() + "px";
}
$(function () {
    $(window).on("resize", fixViewport);
});
function checkStatuses() {
    let downStatuses = [];
    let mojangStatus = JSON.parse(request("https://rocky-castle-55647.herokuapp.com/https://status.mojang.com/check"));
    if (mojangStatus[0]["minecraft.net"] != "green") {
        downStatuses.push("minecraft.net");
    }
    if (mojangStatus[1]["session.minecraft.net"] != "green") {
        downStatuses.push("session.minecraft.net");
    }
    if (mojangStatus[2]["account.mojang.com"] != "green") {
        downStatuses.push("account.mojang.com");
    }
    if (mojangStatus[3]["authserver.mojang.com"] != "green") {
        downStatuses.push("authserver.mojang.com");
    }
    if (mojangStatus[5]["api.mojang.com"] != "green") {
        downStatuses.push("api.mojang.com");
    }
    if (mojangStatus[6]["textures.minecraft.net"] != "green") {
        downStatuses.push("textures.minecraft.net");
    }
    if (mojangStatus[7]["mojang.com"] != "green") {
        downStatuses.push("mojang.com");
    }
    let githubStatus = JSON.parse(request("https://kctbh9vrtdwd.statuspage.io/api/v2/status.json"));
    if (githubStatus.status.indicator == "major") {
        downStatuses.push("github.com");
    }
    githubStatus = JSON.parse(request("https://kctbh9vrtdwd.statuspage.io/api/v2/components.json"));
    if (githubStatus.components[8].status != "operational") {
        downStatuses.push("github.io");
    }
    return downStatuses;
}
let statuses = checkStatuses();
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
    console.warn("One or more services are reporting degraded performance or an outage.", statuses);
}
function loadChunk(chunkIndex) {
    console.log("Load chunk ", chunkIndex);
}
// Lazy loading of message chunks:
let loadingMessages = false;
$("#chatlog").on("scroll", function () {
    let scrollPosition = $("#chatlog").scrollTop();
    let fullHeight = document.getElementById("chatlog").scrollHeight;
    let height = $("#chatlog").height();
    let scrollPercent = (scrollPosition / (fullHeight - height)) * 100;
    let threshold = 95;
    if (loadedChunks >= 10) {
        threshold = 99;
    }
    else if (loadedChunks >= 20) {
        threshold = 100;
    }
    if (scrollPercent >= 95 && !loadingMessages) {
        loadingMessages = true;
        renderChunk(loadedChunks);
        setTimeout(() => {
            loadingMessages = false;
        }, 10);
    }
});
// Temporary buttons for testing - actual sidebar is not ready yet
$("#example-btn").on("click", function () {
    renderContent(messages);
});
$("#true-btn").on("click", function () {
    renderChannel("727912383833702411");
});
// Make sure only plain text is rendered:
var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
};
function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}
