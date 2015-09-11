describe('findReplace', function() {
  it("stores 'original' string, 'target' word to change, and 'replacement' word, and returns replacement", function () {
    //I started off with Dethklok on my playlist and realized "Dethklok again?" and switched to pendulum.
    //Prelude
    expect(findReplace("But tonight, on this small planet, on Mars, we're going to rock civilization","Mars" , "Earth")).to.equal("Earth")
  });
});
