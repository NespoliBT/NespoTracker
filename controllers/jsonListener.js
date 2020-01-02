// Librerie utili 🔥🔥🔥🔥🔥
const fs = require("fs");

// Quando il DOM è pronto  ⚡️⚡️⚡️⚡️⚡️
document.addEventListener("DOMContentLoaded", function(event) {
  var data = fs.readFileSync("json/Tasks.json", "utf-8");
  var jsonData = JSON.parse(data);
  var tasksHTML = "";

  Object.keys(jsonData).forEach(key => {
    let tick = "";
    let completato = "";
    if (jsonData[key].completato) {
      completato = `<p class="completato">✔</p>`;
    } else {
      tick = `<p onclick="completeTask(this.id);" id="${jsonData[key].id}" class="tick">✔</p>`;
    }

    tasksHTML += `
      <div class="task" id="${
        jsonData[key].id
      }container" style="background: hsl(${jsonData[key].color1 +
      "," +
      jsonData[key].color2 +
      "%," +
      jsonData[key].color3 +
      "%)"}">
      ${completato}
        <div class="container">
          <h1>${jsonData[key].titolo}</h1>
          <p>${jsonData[key].descrizione}</p>
        </div>
        <div class="actions">
          
          ${tick}
          <p onclick="removeTask(this.id);" id="${
            jsonData[key].id
          }" class="cross">✘</p>
        </div>
      </div>
    `;
  });
  document.getElementById("tasks").innerHTML = tasksHTML;
  fs.watchFile("json/Tasks.json", function(curr, prev) {
    var data = fs.readFileSync("json/Tasks.json", "utf-8");
    var jsonData = JSON.parse(data);
    tasksHTML = "";
    Object.keys(jsonData).forEach(key => {
      let tick = "";
      let completato = "";
      if (jsonData[key].completato) {
        completato = `<p class="completato">✔</p>`;
      } else {
        tick = `<p onclick="completeTask(this.id);" id="${jsonData[key].id}" class="tick">✔</p>`;
      }
      tasksHTML += `
        <div class="task" id="${
          jsonData[key].id
        }container" style="background: hsl(${jsonData[key].color1 +
        "," +
        jsonData[key].color2 +
        "%," +
        jsonData[key].color3 +
        "%)"}">
        ${completato}
          <div class="container">
            <h1>${jsonData[key].titolo}</h1>
            <p>${jsonData[key].descrizione}</p>
          </div>
          <div class="actions">
            
            ${tick}
            <p onclick="removeTask(this.id);" id="${
              jsonData[key].id
            }" class="cross">✘</p>
          </div>
        </div>
      `;
    });
    tasksHTML +=
      '<div class="task" id="nuovo" onclick="createNewTask()">+</div>';
    document.getElementById("tasks").innerHTML = tasksHTML;
  });
});
