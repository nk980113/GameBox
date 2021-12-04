const { nativeTheme, ipcMain } = require('electron');

const { app } = require('./app')(() => {
    ipcMain.handle('dark-mode:toggle', () => {
        nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('dark-mode:system', () => { nativeTheme.themeSource = 'system'; });
});