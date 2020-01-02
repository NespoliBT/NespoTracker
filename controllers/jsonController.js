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
