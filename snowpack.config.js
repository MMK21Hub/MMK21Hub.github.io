// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: "/src",
    mount: {
        src: "/",
    },
    plugins: [
        [
            "@snowpack/plugin-sass",
            {
                native: true,
            },
        ],
        //"@snowpack/plugin-typescript",
    ],
    packageOptions: { sourceMap: true },
    devOptions: {},
    buildOptions: {
        out: "dist",
    },
}
