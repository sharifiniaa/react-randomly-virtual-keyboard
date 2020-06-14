export const randomString = (word) => {
  var result = "";
  var characters = word;
  var resultLength = result.length;
  for (resultLength; resultLength < word.length; resultLength++) {
    var generatedNum = Math.floor(Math.random() * characters.length) + 0;

    var character = characters.charAt(generatedNum);
    result += character;

    var charactersIndex = characters.indexOf(character);

    characters =
      characters.slice(0, charactersIndex) +
      characters.slice(charactersIndex + 1);
  }
  return result;
};

export const cleanWhiteSpace = (array) => {
  let newValue = [];
  for (let i in array) {
    let created = randomString(array[i].replace(/\s/g, "")).split("").join(" ");
    newValue.push(created);
  }
  return newValue;
};
