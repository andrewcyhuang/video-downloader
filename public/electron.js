const youtubedl = require('youtube-dl');

const electron = require("electron");
const { app, BrowserWindow, ipcMain, shell } = electron;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
    )

    mainWindow.on("closed", () => (mainWindow = null))
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow()
    }
})

ipcMain.on('video::added', (event, video) => {
    youtubedl.getInfo(video.url, (err, info) => {
        if (err) throw new Error('!!! TODO !!!');
         mainWindow.webContents.send('metadata::complete', info);
    })
})

ipcMain.on('stream::start', (event, video) => {
    
})

