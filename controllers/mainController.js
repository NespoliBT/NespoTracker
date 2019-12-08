// Librerie utili 🔥🔥🔥🔥🔥
const electron = require("electron");
const BrowserWindow = electron.remote.BrowserWindow;

// Quando il DOM è pronto  ⚡️⚡️⚡️⚡️⚡️
document.addEventListener("DOMContentLoaded", function(event) {
  // Quando viene schiacchiato il tasto "➕"
  document.getElementById("nuovo").addEventListener("click", function() {
    // Click click
    console.log("click");

    // Crea una nuova finestra
    let newTaskWindow = new BrowserWindow({
      width: 300,
      height: 500,
      webPreferences: {
        nodeIntegration: true
      }
    });
    // Carica il file html di mio gradimento
    newTaskWindow.loadFile("newTask.html");
    newTaskWindow.isResizable(false);
  });
});
