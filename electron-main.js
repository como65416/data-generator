const { app, BrowserWindow, Menu, MenuItem} = require('electron')

let win

function createWindow() {
  let windowConfig = {
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  };

  let indexPageURL = `file://${__dirname}/public/index.html`;
  if (process.argv.includes('--dev')) {
    indexPageURL = `http://localhost:8089/index.html`;
    windowConfig.webPreferences.webSecurity = false;
  }

  win = new BrowserWindow(windowConfig);
  win.loadURL(indexPageURL);

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
