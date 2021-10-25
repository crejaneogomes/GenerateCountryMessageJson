const fs = require("fs");
const countriesJson = require("./countries.json");
const REGEX_FIRST_LETTER = '/^\w/';
const REGEX_WHITE_SPACE = '/\s/g';

const writeInFile = (data) => {
  fs.writeFile("input.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Gerou arquivo");
  });
};

const removeWhiteSpacesAndSpecialCharacters = (word) => {
  return word.replace(REGEX_WHITE_SPACE, "")
  .replace("&", "")
  .replace("(", "")
  .replace(")", "")
  .replace("Å", "")
  .replace("é", "")
  .replace(".", "");
}

const replaceWhiteSpaceForUnderlineandRemoveSpecialCharacters = (word) => {
  return word.replace(REGEX_WHITE_SPACE, "_")
  .replace("&", "")
  .replace("(", "")
  .replace(")", "")
  .replace("Å", "")
  .replace("é", "")
  .replace(".", "");
}

const firstLetterInLowerCase = (word) => {
 return word.replace(REGEX_FIRST_LETTER, (c) => c.toLowerCase());
}

const generateTexts = () => {
  var json = {};
  var jsonPai = {};
  var vetorfinal = [];
  for (i = 0; i < countriesJson.length; i++) {
    var primeira = firstLetterInLowerCase(countriesJson[i].nome_pais_int);
    var pais_ingles = removeWhiteSpacesAndSpecialCharacters(primeira);
    var pais_ingles_diferente = replaceWhiteSpaceForUnderlineandRemoveSpecialCharacters(primeira);
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

(function () {
  let index;
  var resultVector = [];
  for (index = 0; index < countriesJson.length; index++) {
    var json = {};
    var formattedJson = {};
    var fatherAttribute = countriesJson[index].nome_pais_int;
    var idAttribute = "id";
    var messageAttribute = "defaultMessage";
    json[idAttribute] = "DataSections.ResidenceData." + countriesJson[index].nome_pais_int;
    json[messageAttribute] = countriesJson[index].nome_pais;
    formattedJson[fatherAttribute] = json;
    resultVector.push(formattedJson);
  }
  writeInFile(resultVector);
})();