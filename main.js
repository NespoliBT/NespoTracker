// Librerie utili 🔥🔥🔥🔥🔥
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  // Crea la finestra del browser
  let main = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 540,
    minWidth: 350,
    webPreferences: {
      nodeIntegration: true
    }
  });
  main.loadFile("index.html");
}

app.on("ready", createWindow);
