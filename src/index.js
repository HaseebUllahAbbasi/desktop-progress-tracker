const { app, BrowserWindow } = require("electron");
const path = require("path");
const { createServer } = require("vite");

let mainWindow;

async function createWindow() {
  const viteServer = await createServer({
    root: path.join(__dirname),
    server: {
      watch: {
        usePolling: true,
      },
    },
  });

  await viteServer.listen();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(`http://localhost:${viteServer.config.server.port}`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
app.disableHardwareAcceleration();
