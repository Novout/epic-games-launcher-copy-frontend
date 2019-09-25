# Epic Games Launcher

**You can find a detailed documentation about how to build Electron apps with Next.js [here](https://leo.im/2017/electron-next)!**

## How to use

To install and start dev build:

```bash
git clone https://github.com/Novout/epic-games-launcher.git
yarn install && yarn build && yarn start
```
Available commands:
```bash
"yarn build-renderer": build and transpile Next.js layer
"yarn build-electron": transpile electron layer
"yarn build": build both layers
"yarn start": start dev version
"yarn dist": create production elctron build
"yarn type-check": check TypeScript in project
```

## Structure

| Part       | Source code (Typescript) | Builds (JavaScript) |
| ---------- | ------------------------ | ------------------- |
| Next.js    | `/renderer`              | `/renderer`         |
| Electron   | `/electron-src`          | `/main`             |
| Production |                          | `/dist`             |
