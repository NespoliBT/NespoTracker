// Librerie utili 🔥🔥🔥🔥🔥
const jsonController = require("./jsonController");
const remote = require("electron").remote;

// Quando il DOM è pronto  ⚡️⚡️⚡️⚡️⚡️
document.addEventListener("DOMContentLoaded", function(event) {
  var aggiungi = document.getElementById("aggiungi");
  var titolo = document.getElementById("titolo");
  var descrizione = document.getElementById("desc");

  aggiungi.addEventListener("click", function() {
    // Click Click
    console.log("click");
    if (titolo.value && descrizione.value) {
      jsonController.addTask(titolo.value, descrizione.value);
    }
    //TODO Chiudere la finestra solo quando finisce jsonController
  });
});
