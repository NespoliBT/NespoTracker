// Librerie utili 🔥🔥🔥🔥🔥
const fs = require("fs");
module.exports = {
  addTask: function(titolo, descrizione) {
    // Viene letto il file 📖
    fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
      if (err) throw err;
      // Dati letti dal file
      var jsonData = JSON.parse(data);

      // Genera nuovo id
      id = btoa(titolo, descrizione);

      // Aggiunta nuovi elementi al file 🆕
      jsonData.tasks.push({
        id: id,
        titolo: titolo,
        descrizione: descrizione,
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
  console.log(id);
  fs.readFile("json/Tasks.json", "utf-8", function(err, data) {
    if (err) throw err;
    // Dati letti dal file
    var jsonData = JSON.parse(data).tasks;

    jsonData = Object.keys(jsonData);

    console.log(jsonData);
    jsonData = jsonData.filter(function(task) {
      return task.id !== id;
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
