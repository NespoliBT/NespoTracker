// Librerie utili 🔥🔥🔥🔥🔥
const electron = require("electron");
const BrowserWindow = electron.remote.BrowserWindow;
const jsonController = require("./controllers/jsonController");
// Quando il DOM è pronto  ⚡️⚡️⚡️⚡️⚡️
document.addEventListener("DOMContentLoaded", function(event) {
  let tasksHTML = document.getElementById("tasks").innerHTML;
  tasksHTML += `
        <div class="task" id="nuovo" onclick="createNewTask()">+</div>
      `;
  document.getElementById("tasks").innerHTML = tasksHTML;
  document.onkeydown = KeyPress;
});

// Quando viene schiacchiato il tasto "➕"
function createNewTask() {
  // Click click
  console.log("click");
  document.getElementById("nuovo").style.display = "none";
  tasksHTML = document.getElementById("tasks").innerHTML;
  tasksHTML += `
  <div class="newTask" id="newTask">
    <div class="aggiungiElimina-container">
      <button class="elimina" id="elimina">Elimina!</button>
      <button class="aggiungi" id="aggiungi">Aggiungi!</button>
    </div>
    <div class="container" id="container">
      <input type="text" id="titolo" placeholder="Titolo" />
      <textarea name="desc" id="desc" placeholder="Descrizione"></textarea>
    </div>
    <input type="hidden" name="color1" />
    <input type="hidden" name="color2" />
    <input type="hidden" name="color3" />
  </div>
`;
  document.getElementById("tasks").innerHTML = tasksHTML;

  document.getElementById("elimina").addEventListener("click", function() {
    document
      .getElementById("newTask")
      .parentNode.removeChild(document.getElementById("newTask"));
    tasksHTML = document.getElementById("tasks").innerHTML;
    document.getElementById("tasks").innerHTML = tasksHTML;

    document.getElementById("nuovo").style.display = "flex";
  });
  document.getElementById("aggiungi").addEventListener("click", function() {
    let titolo = document.getElementById("titolo");
    let descrizione = document.getElementById("desc");
    let descrizioneFormat = descrizione.value.replace(/\n/g, "<br>");
    color1 = 360 * Math.random();
    color2 = 90 + 70 * Math.random();
    color3 = 80 + 10 * Math.random();
    if (titolo.value && descrizione.value) {
      jsonController.addTask(
        titolo.value,
        descrizioneFormat,
        color1,
        color2,
        color3
      );
    }
  });
}

function KeyPress(e) {
  var evtobj = window.event ? event : e;
  if (evtobj.keyCode == 78 && evtobj.ctrlKey) {
    if (!document.getElementById("tasks").innerHTML.includes("newTask"))
      createNewTask();
  }
}
