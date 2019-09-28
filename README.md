# Epic Games Launcher Copy
![](https://img.shields.io/badge/Electron-6-green) ![](https://img.shields.io/badge/React-16.9-blue) ![](https://img.shields.io/badge/NextJS-9-purple) ![](https://img.shields.io/badge/Typescript-3.6-brightgreen)

![](https://i.imgur.com/HE6XAHI.png)
## How to use

To install and start dev build:

```bash
git clone https://github.com/Novout/epic-games-launcher-copy.git
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

## Content

- [x] Login
- [x] Register
- [x] Configuration
- [x] Mars
- [ ] Store
- [ ] Icons
- [ ] Fonts

 > CREDITS: Total Credits to Epic Games

