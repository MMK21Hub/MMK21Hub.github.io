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

interface embed{
    // Embeds are not supported yet
}

export interface reaction {
    emoji: emoji;
    count: number;
}

export interface emoji {
    id:         null;
    name:       string;
    isAnimated: boolean;
    imageUrl:   string;
}

