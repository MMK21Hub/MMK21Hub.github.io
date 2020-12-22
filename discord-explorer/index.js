// DiscordRender - View Discord channel exports right in your browser.
// Some example messages for testing:
var messages = [
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
    },
    {
        id: "728382594038890556",
        type: "Default",
        timestamp: "2020-07-02T22:52:23.113+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "lol",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
    },
    {
        id: "728634998726590594",
        type: "Default",
        timestamp: "2020-07-03T15:35:21.08+00:00",
        timestampEdited: null,
        callEndedTimestamp: null,
        isPinned: false,
        content: "why don\u0027t you use the new #deleted-channel",
        author: {
            id: "511656055974133780",
            name: "\uD83D\uDC11Sheep-kun; SheepCommander\u262D\uD83C\uDFA9",
            discriminator: "1511",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/603662813524656180/bc53d93eb196365372a82d175a9fcd21.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
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
            avatarUrl: "https://cdn.discordapp.com/avatars/511656055974133780/382b515765ba3155c7461c9842c0cb88.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
    },
];
function loadFile(filePath) {
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
// Render an array of messages:
function renderContent(messages) {
    var chatlog = document.getElementById("chatlog");
    chatlog.innerHTML = ""; // Reset the chatlog before rendering the new messages
    if (messages.length >= 100) { // Split the array into chunks if it's big
        // Split the array into chunks if it's big
        var chunks = Math.ceil(messages.length / 100);
        var chunkedMessages = [];
        var i;
        for (i = 0; i < chunks; i++) {
            chunkedMessages.push(messages.slice(i * 100, (i * 100) + 100));
        }
        console.log("Split " + messages.length + " messages into " + chunkedMessages.length + " chunks");
        console.log(chunkedMessages);
    }
    // Parse each message:
    chunkedMessages[0].forEach(function (currentMsg) {
        var messageCard = document.createElement("div"); // Prepare the new msg card
        messageCard.setAttribute("class", "message-card");
        messageCard.innerHTML = currentMsg.content;
        chatlog.appendChild(messageCard); // Add the msg card to the chatlog
    });
    console.log("Finished rendering all " + messages.length + " messages");
}
// Get a saved Discord channel and give it to renderContent():
function renderChannel(id) {
    var channelData = JSON.parse(loadFile("assets/" + id + ".json"));
    renderContent(channelData.messages);
}
// Fix height of chatlog:
var correctHeight = document.getElementById("main-content").clientHeight - 25;
document.getElementById("chatlog").style.height =
    correctHeight.toString() + "px";
