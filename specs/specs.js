describe('pigLatin', function() {
  it("reports if first letter is a consonant or a vowel", function () {
    expect(pigLatin("bedroom")).to.equal("consonant");
  });

  it("reports if first letter is a consonant or a vowel", function () {
    expect(pigLatin("eeore")).to.equal("vowel");
  });
});
