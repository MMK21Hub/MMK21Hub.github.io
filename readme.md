<p align="center">
  <img src="assets/logo-alt-smile.png" alt="Discord Explorer logo" width="100" height="100">
</p>

<h1 align="center">Discord Explorer</h1>

<p align="center">
  <strong>View Discord chanel exports in your browser</strong>
  <br>
  Discord Explorer makes your discord channels portable! Export a single channel or whole server without violating Discord's ToS, upload it, and browse through your message history using a familiar but powerful interface.
</p>

<p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/MMK21Hub/mmk21hub.github.io">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/MMK21Hub/mmk21hub.github.io/main">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MMK21Hub/mmk21hub.github.io">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/MMK21Hub/MMK21Hub.github.io">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MMK21Hub/mmk21hub.github.io">
</p>

<p align="center"><b><a href="https://mmk21.github.io/">mmk21.github.io</a></b></p>

---

## Structure

|           Folder | Description                                            |
| ---------------: | ------------------------------------------------------ |
| [assets](assets) | Static images etc                                      |
|   [other](other) | Miscellaneous weirdness                                |
|    [lib](dinner) | Libraries not handled by npm                           |
|       [src](src) | The project source code - this is where you want to be |

On the server, there's a `dist` folder containing compiled files for production. However, this does not exist on GitHub, instead it is generated by Snowpack on each deploy.

A `node_modules` folder is also generated when you `npm install` locally. You should not commit this folder.

## Branches

- `master` This is what's running in production

## Contributions

Discord Explorer is still in a very early stage of development - feel free to contribute! Please read the [contributing.md](contributing.md) for more information.
