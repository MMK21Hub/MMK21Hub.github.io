module.exports = {
    entry: "./discord-explorer/index.ts",
    output: {
        filename: "discord-explorer.js",
    },
    module: {
        rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    watch: true,
}
