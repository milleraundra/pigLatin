var pigLatin = function(word) {
  if(word) {
    if (word.indexOf("a") === 0 || word.indexOf("e") === 0 || word.indexOf("o") === 0 || word.indexOf("i") === 0 || word.indexOf("u") === 0)  {
      // return "vowel";
      return word.concat("ay");

    }else if ((word.indexOf("a") === -1 && word.indexOf("e") === -1 && word.indexOf("o") === -1 && word.indexOf("i") === -1 && word.indexOf("u") === -1) && (word.indexOf("y") > -1)) {
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

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
      // debugger;
      var sentence = $("input#sentence").val();
      sentence = sentence.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");

      var sentenceArray = sentence.split(" ");

      var pigSentence = sentenceArray.map(pigLatin);

      var finalSentence = pigSentence.join(" ");


      // sentenceArray.forEach(pigLatin);

      $(".translated").text(finalSentence)

       event.preventDefault();
  });
});
// var newSentence = sentence.toLowerCase();

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

// for loop attempt 2


      // for (var i = 0; i < sentenceArray.length; i += 1) {
      //   var finalSentence = pigLatin(sentenceArray);
      // }
