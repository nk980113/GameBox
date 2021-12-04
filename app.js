const { join } = require('node:path');
const { app, BrowserWindow } = require('electron');

const createApp = async initCB => {
    await app.whenReady();
    const createWin = () => {
        const win = new BrowserWindow({
            width: 1600,
            height: 1200,
            webPreferences: {
                preload: join(__dirname, 'preload.js'),
            },
        });

        win.loadFile('index.html');
        initCB();
        return win;
    };

    let globalWin = createWin();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) globalWin = createWin();
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });
    

    return { app, win: globalWin };
};

module.exports = createApp;