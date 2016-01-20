var pigLatin = function(word) {

  if(word) {
    if(word.startsWith("b")) {
      return "consonant";
    }else {
      return "vowel";
    }
  } else {
    alert("Enter something");
  }
}
