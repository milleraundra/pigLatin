describe('pigLatin', function() {
  it("slicedWord and OtherHalf create new word", function() {
    expect(pigLatin("buddy")).to.equal("uddybay");
  });
  it("accounts for words with only vowels", function() {
    expect(pigLatin("i")).to.equal("iay");
  });
  it("slicedWord and OtherHalf create new word", function() {
    expect(pigLatin("gym")).to.equal("gymay");
  });
});
