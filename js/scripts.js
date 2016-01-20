var pigLatin = function(word) {
  if(word) {
    if (word.indexOf("a") === 0 || word.indexOf("e") === 0 || word.indexOf("o") === 0 || word.indexOf("i") === 0 || word.indexOf("u") === 0  ) {
      // return "vowel";
      return word.concat("ay");
    }else {
      // debugger;
      var re = /[aeiou]/;
      var match = re.exec(word);
      var vowelPosition = match.index;

      var slicedWord = word.slice(0, (vowelPosition));
      var otherHalf = word.slice(vowelPosition, word.length);
      return otherHalf + slicedWord + "ay";

    }
  } else {
    alert("Enter something");
  }
}




// var pigLatin = function(input) {
//   if(input) {
//
//     var word = input.split(" ");
//
//     if (word.indexOf("a") === 0 || word.indexOf("e") === 0 || word.indexOf("o") === 0 || word.indexOf("i") === 0 || word.indexOf("u") === 0  ) {
//       // return "vowel";
//       return word.concat("ay");
//     }else {
//       // debugger;
//       var re = /[aeiou]/;
//       var match = re.exec(word);
//       var vowelPosition = match.index;
//
//       var slicedWord = word.slice(0, (vowelPosition));
//       var otherHalf = word.slice(vowelPosition, word.length);
//       return otherHalf + slicedWord + "ay";
//
//     }
//   } else {
//     alert("Enter something");
//   }
// }
