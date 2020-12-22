// DiscordRender - View Discord channel exports right in your browser.
// Some example messages for testing
var messages = [
    {
        id: "729000884389806161",
        type: "Default",
        timestamp: "2020-07-04T15:49:15.02+00:00",
        timestampEdited: "2020-07-04T15:49:19.756+00:00",
        callEndedTimestamp: null,
        isPinned: false,
        content: "(I mainly just wanted to get rid of the ghost notification)",
        author: {
            id: "325691401851633674",
            name: "ly",
            discriminator: "6969",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/325691401851633674/cb3ebb9ce8caca16407dfc9bf00127c0.png"
        },
        attachments: [],
        embeds: [],
        reactions: [],
        mentions: []
    },
    {
        id: "729315511329882153",
        type: "Default",
        timestamp: "2020-07-05T12:39:27.928+00:00",
        timestampEdited: "2020-07-05T12:40:06.393+00:00",
        callEndedTimestamp: null,
        isPinned: false,
        content: "Add a message every day in a #motd channel with a random command fact that could be useful or inspire people. For example \u0027you can use /replaceitem to put an item into a specific slot in someone\u0027s inventory\u0027 or \u0027the /effect command has an option to show or hide particles\u0027",
        author: {
            id: "646445858233122843",
            name: "\uD83C\uDF35BugFixer - MiniMinnow",
            discriminator: "8908",
            isBot: false,
            avatarUrl: "https://cdn.discordapp.com/avatars/646445858233122843/3bd25f90e1cf9fad0877556ba94586cc.png"
        },
        attachments: [],
        embeds: [],
        reactions: [
            {
                emoji: {
                    id: null,
                    name: "\uD83D\uDC4D",
                    isAnimated: false,
                    imageUrl: "https://twemoji.maxcdn.com/2/72x72/1f44d.png"
                },
                count: 13
            },
        ],
        mentions: []
    },
];
function loadFile(filePath) {
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
// Parse each message
function renderContent(messages) {
    var chatlog = document.getElementById("chatlog");
    chatlog.innerHTML = "";
    messages.forEach(function (currentMsg) {
        var messageCard = document.createElement("div"); // Prepare the new msg card
        messageCard.setAttribute("class", "message-card");
        messageCard.innerHTML = currentMsg.content;
        chatlog.appendChild(messageCard); // Add the msg card to the chatlog
    });
    console.log("Finished rendering all " + messages.length + " messages");
}
function renderChannel(id) {
    var channelData = JSON.parse(loadFile("assets/" + id + ".json"));
    renderContent(channelData.messages);
}
