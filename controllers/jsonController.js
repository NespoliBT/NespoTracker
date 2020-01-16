// Librerie utili 🔥🔥🔥🔥🔥
const fs = require("fs");

module.exports = {
  addTask: function(titolo, descrizione, color1, color2, color3) {
    // Viene letto il file 📖
    fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
      if (err) throw err;
      // Dati letti dal file
      var jsonData = JSON.parse(data);

      // Aggiunta nuovi elementi al file 🆕
      jsonData.push({
        id: Date.now(),
        titolo: titolo,
        descrizione: descrizione,
        color1: color1,
        color2: color2,
        color3: color3,
        completato: false
      });

      // Cerca di scrivere nel file 🖋
      fs.writeFile(
        // File in cui scrivere
        "json/Tasks.json",

        // Dati da scrivere
        JSON.stringify(jsonData),

        // Codifica usata per le faccine 😁
        "utf-8",

        // Se non riesce a scrivere nel file ❌
        function(err) {
          if (err) throw err;
        }
      );
    });
  }
};

function removeTask(id) {
  document.getElementById(id + "container").style.display = "none";

  fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
    if (err) throw err;
    // Dati letti dal file 📚
    let jsonData = JSON.parse(data);

    // console.log(jsonData);
    let currentTasks = jsonData.filter(function(task) {
      return task.id != id;
    });

    // Cerca di scrivere nel file 🖋
    fs.writeFile(
      // File in cui scrivere
      "json/Tasks.json",

      // Dati da scrivere
      JSON.stringify(currentTasks),

      // Codifica usata per le faccine 😁
      "utf-8",

      // Se non riesce a scrivere nel file ❌
      function(err) {
        if (err) throw err;
      }
    );
  });
}

function completeTask(id) {
  let jsonData;

  fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
    if (err) throw err;
    jsonData = JSON.parse(data);
    Object.keys(jsonData).forEach(key => {
      if (jsonData[key].id == id) {
        jsonData[key].completato = true;
      }
    });

    // Cerca di scrivere nel file 🖋
    fs.writeFile(
      // File in cui scrivere
      "json/Tasks.json",

      // Dati da scrivere
      JSON.stringify(jsonData),

      // Codifica usata per le faccine 😁
      "utf-8",

      // Se non riesce a scrivere nel file ❌
      function(err) {
        if (err) throw err;
      }
    );
  });
}

function modifyTask(id) {
  let tasksHTML = document.getElementById("tasks").innerHTML;
  let taskToModify = document.getElementById(id + "container");
  let oldBody = document.body.innerHTML;

  let oldTitle = taskToModify.children
    .namedItem("container")
    .children.namedItem("titolo").innerHTML;

  let oldDesc = taskToModify.children
    .namedItem("container")
    .children.namedItem("descrizione").innerHTML;

  let oldBackground = taskToModify.style.background;

  document.body.innerHTML += `
  <div class="modifyTask" id="modifyTask">
    
    <div class="container" id="container" style="background: ${oldBackground}">
      <input type="text" id="titolo" placeholder="Titolo" value="${oldTitle}"/>
      <textarea name="desc" id="desc" placeholder="Descrizione">${oldDesc}</textarea>
    </div>
    <div class="aggiungiElimina-container">
      <button class="chiudiMod" id="chiudiMod">✘</button>
      <button class="confermaMod" id="${id}">✔</button>
    </div>
  </div>
  `;

  window.setTimeout(function() {
    document.getElementById("modifyTask").className += " fade-in";
  });

  document.getElementById("chiudiMod").addEventListener("click", function() {
    document.body.innerHTML = oldBody;
  });

  document.querySelector(".confermaMod").addEventListener("click", function() {
    let jsonData;
    let id = document.querySelector(".confermaMod").id;
    let modifiedTask = document
      .getElementById("modifyTask")
      .children.namedItem("container");

    let newTitle = modifiedTask.children.namedItem("titolo").value;

    let newDesc = modifiedTask.children.namedItem("desc").value;

    let newDescFormat = newDesc.replace(/\n/g, "<br>");

    fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
      if (err) throw err;
      jsonData = JSON.parse(data);

      Object.keys(jsonData).forEach(key => {
        if (jsonData[key].id == id) {
          jsonData[key].titolo = newTitle;
          jsonData[key].descrizione = newDescFormat;
        }
      });

      // Cerca di scrivere nel file 🖋
      fs.writeFile(
        // File in cui scrivere
        "json/Tasks.json",

        // Dati da scrivere
        JSON.stringify(jsonData),

        // Codifica usata per le faccine 😁
        "utf-8",

        // Se non riesce a scrivere nel file ❌
        function(err) {
          if (err) throw err;
        }
      );
    });

    document.body.innerHTML = oldBody;
  });
}
