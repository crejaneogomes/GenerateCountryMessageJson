const fs = require("fs");
const countriesJson = require("./countries.json");
const REGEX_FIRST_LETTER = /^\w/;
const REGEX_WHITE_SPACE = /\s/g;

const writeInFile = (data) => {
  fs.writeFile("input.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Gerou arquivo");
  });
};

const removeWhiteSpacesAndSpecialCharacters = (word) => {
  return removeSpecialCharacters(word.replace(REGEX_WHITE_SPACE, ""));
}

const replaceWhiteSpaceForUnderlineAndRemoveSpecialCharacters = (word) => {
  return removeSpecialCharacters(word.replace(REGEX_WHITE_SPACE, "_"));
}

const removeSpecialCharacters = (word) => {
  return word.replace("&", "")
  .replace("(", "")
  .replace(")", "")
  .replace("Å", "")
  .replace("é", "")
  .replace(".", "");
}

const firstLetterInLowerCase = (word) => {
 return word.replace(REGEX_FIRST_LETTER, (c) => c.toLowerCase());
}

(function () {
  let index;
  var resultVector = [];
  for (index = 0; index < countriesJson.length; index++) {
    var json = {};
    var formattedJson = {};
    var fatherAttribute = removeWhiteSpacesAndSpecialCharacters(firstLetterInLowerCase(countriesJson[index].nome_pais_int)) + 'Country';
    var idAttribute = "id";
    var messageAttribute = "defaultMessage";
    json[idAttribute] = "DataSections.ResidenceData." + removeWhiteSpacesAndSpecialCharacters(firstLetterInLowerCase(countriesJson[index].nome_pais_int)) + 'Country';
    json[messageAttribute] = countriesJson[index].nome_pais;
    formattedJson[fatherAttribute] = json;
    resultVector.push(formattedJson);
  }
  writeInFile(resultVector);
})();