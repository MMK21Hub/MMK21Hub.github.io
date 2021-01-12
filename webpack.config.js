module.exports = {
    entry: "./discord-explorer/index.js",
    output: {
        filename: "discord-explorer.js",
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}
