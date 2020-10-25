const electron = require("electron");
const { app, BrowserWindow, ipcMain, shell } = electron;
const youtubedl = require('youtube-dl');
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 900, 
        height: 680, 
        webPreferences: {
            nodeIntegration: true
        }
    });
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

ipcMain.on('video::added', (event, url) => {
    try {
        youtubedl.getInfo(url, (err, info) => {
    
            if (err) throw new Error(`youtube-dl.getInfo call failed. ${err}`);
            
            mainWindow.webContents.send('metadata::complete', info);
        })
    } catch (err) {
        console.log('youtube-dl.getInfo call failed.')
    }
})

ipcMain.on('stream::start', (event, video) => {
    
})

