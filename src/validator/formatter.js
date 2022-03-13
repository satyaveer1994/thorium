//Module 3

function trim() {
  let name = "  Satyaveer singh    ";
  console.log("Trimmed name is: ", name.trim());
}

function changetoLowerCase() {
  let name = "SaTyAveeR  SiNgH";
  console.log("Name in lowercase is: ", name.toLowerCase());
}

function changeToUpperCase() {
  let name = "satyaveer singh";
  console.log("Name in uppercase is: ", name.toUpperCase());
}

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
