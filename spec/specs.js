describe('findReplace', function() {
  it("stores 'original' string, 'target' word to change, and 'replacement' word, and returns replacement", function () {
    //I started off with Dethklok on my playlist and realized "Dethklok again?" and switched to pendulum.
    //Prelude
    expect(findReplace("But tonight, on this small planet, on Mars, we're going to rock civilization","Mars" , "Earth")).to.equal("But tonight, on this small planet, on Earth, we're going to rock civilization")
  });

  //Through the Loop - Willie Wonka dark-tunnel scene set to drum and base as intro. Not quite my favorite Pendulum song, but its close...
  it("stores original string, target, and replacement, and returns a modified string", function (){
    expect(findReplace("YES! The danger must be shrinking, for the rowers keep on rowing, and they're certainly not showing any signs that they're slowing","shrinking","growing")).to.equal("YES! The danger must be growing, for the rowers keep on rowing, and they're certainly not showing any signs that they're slowing")
  });

});
