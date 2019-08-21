const electron = require('electron');
const sizeof = require('image-size');

const {app, BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on('ready', ( ) => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('obterDimensoesDaImagem', (event, path) => {
    sizeof(path, function(err, dimensions) {
        mainWindow.webContents.send('dimensoesDaImagem', dimensions);
    })
});