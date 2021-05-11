// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: "/src",
    mount: {
        src: "/",
        lib: "/lib",
    },
    plugins: [
        [
            "@snowpack/plugin-sass",
            {
                native: true,
            },
        ],
        //"@snowpack/plugin-typescript",
        [
            "@snowpack/plugin-webpack",
            {
                sourceMap: true,
            },
        ],
    ],
    packageOptions: { sourcemap: true },
    devOptions: {
        hmr: true,
    },
    buildOptions: {
        out: "dist",
    },
    optimize: {
        sourcemap: "external",
    },
}
