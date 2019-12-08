// Librerie utili 🔥🔥🔥🔥🔥
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Crea la finestra del browser
  let main = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  main.loadFile("index.html");
}

app.on("ready", createWindow);
