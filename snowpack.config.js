// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: "/src/index.html",
    mount: {
        src: "/",
    },
    plugins: [
        //"@snowpack/plugin-typescript",
        "@snowpack/plugin-sass",
    ],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
}
