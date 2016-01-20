describe('pigLatin', function() {
  // it("reports if first letter is a consonant", function () {
  //   expect(pigLatin("china")).to.equal("consonant");
  // });
  //
  // it("reports if first letter is a vowel", function () {
  //   expect(pigLatin("understand")).to.equal("vowel");
  // });

  // it("pigVowel should append 'ay' to the end of the vowel", function() {
  //   expect(pigLatin("understand")).to.equal("understanday");
  // });

  // it("vowelPosition should tell index of first vowel", function() {
  //   expect(pigLatin("buddy")).to.equal(0);
  // });

  it("slicedWord and OtherHalf create new word", function() {
    expect(pigLatin("buddy")).to.equal("uddybay");
  });

  it("takes a sentence and makes it an array", function() {
    expect(pigLatin("hello there")).to.equals("ellohay erethay");
  });
});
