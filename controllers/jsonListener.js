// Librerie utili 🔥🔥🔥🔥🔥
const fs = require("fs");

// Quando il DOM è pronto  ⚡️⚡️⚡️⚡️⚡️
document.addEventListener("DOMContentLoaded", function(event) {
  var data = fs.readFileSync("json/Tasks.json", "utf-8");
  var jsonData = JSON.parse(data).tasks;
  var tasksHTML = "";

  Object.keys(jsonData).forEach(key => {
    tasksHTML += `
      <div class="task" style="background: hsl(${360 * Math.random() +
        "," +
        (90 + 70 * Math.random()) +
        "%," +
        (80 + 10 * Math.random()) +
        "%)"}">
        <div class="container">
          <h1>${jsonData[key].titolo}</h1>
          <p>${jsonData[key].descrizione}</p>
        </div>
        <div class="actions">
          <p class="tick">✔</p>

            <p onclick="removeTask(this);" id="${
              jsonData[key].id
            }" class="cross">✘</p>
        </div>
      </div>
    `;
  });

  document.getElementById("tasks").innerHTML = tasksHTML;
  fs.watchFile("json/Tasks.json", function(curr, prev) {
    var data = fs.readFileSync("json/Tasks.json", "utf-8");
    var jsonData = JSON.parse(data).tasks;
    tasksHTML = "";

    Object.keys(jsonData).forEach(key => {
      tasksHTML += `
      <div class="task" style="background: hsl(${360 * Math.random() +
        "," +
        (90 + 70 * Math.random()) +
        "%," +
        (80 + 10 * Math.random()) +
        "%)"}">
        <div class="container">
          <h1>${jsonData[key].titolo}</h1>
          <p>${jsonData[key].descrizione}</p>
        </div>
        <div class="actions">
          <p class="tick">✔</p>
          <p class="cross">✘</p>
        </div>
      </div>
    `;
    });

    document.getElementById("tasks").innerHTML = tasksHTML;
  });
});
