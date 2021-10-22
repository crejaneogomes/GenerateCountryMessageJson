const fs = require("fs");
const paises = require("./countries.json");

const writeInFile = (data) => {
  fs.writeFile("input.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Gerou arquivo");
  });
};

(function () {
  let i;
  var json = {};
  var jsonPai = {};
  var vetorfinal = [];
  var imprimir = [];
  for (i = 0; i < paises.length; i++) {
    var col1 = paises[i].nome_pais_int;
    var columnName = "id";
    var col2 = "defaultMessage";
    json[columnName] = "DataSections.ResidenceData." + paises[i].nome_pais_int;
    json[col2] = paises[i].nome_pais;
    jsonPai[col1] = json;
    vetorfinal.push(jsonPai);
    col1 = null;
    json = {};
    jsonPai = {};
  }
  writeInFile(vetorfinal);
})();

const generateTexts = () => {
  var json = {};
  var jsonPai = {};
  var vetorfinal = [];
  for (i = 0; i < paises.length; i++) {
    var primeira = paises[i].nome_pais_int.replace(/^\w/, (c) =>
      c.toLowerCase()
    );
    var pais_ingles = primeira
      .replace(/\s/g, "")
      .replace("&", "")
      .replace("(", "")
      .replace(")", "")
      .replace("Å", "")
      .replace("é", "")
      .replace(".", "");
    var pais_ingles_diferente = primeira
      .replace(/\s/g, "_")
      .replace("&", "")
      .replace("(", "")
      .replace(")", "")
      .replace("Å", "")
      .replace("é", "")
      .replace(".", "");
    //console.log(pais_ingles+'Country: { id: \'DataSections.ResidenceData.'+pais_ingles+'Country\', defaultMessage: \''+pais[i].nome_pais+'\',},');
    //console.log('[COUNTRY.'+pais_ingles_diferente.toUpperCase()+']: messages.'+pais_ingles+'Country,');
    console.log(
      pais_ingles_diferente.toUpperCase() +
        ": '" +
        pais_ingles_diferente.toUpperCase() +
        "',"
    );
  }
};
