"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
    global.ipcRenderer = electron_1.ipcRenderer;
});
