describe('findReplace', function () {
  it("stores 'original' string, 'target' word to change, and 'replacement' word, and returns replacement", function () {
    //I started off with Dethklok on my playlist and realized "Dethklok again?" and switched to pendulum.
    //Prelude
    expect(findReplace("But tonight, on this small planet, on Mars, we're going to rock civilization","Mars" , "Earth")).to.equal("But tonight, on this small planet, on Earth, we're going to rock civilization");
  });

  //Through the Loop - Willie Wonka dark-tunnel scene set to drum and base as intro. Not quite my favorite Pendulum song, but its close...
  it("stores original string, target, and replacement, and returns a modified string", function () {
    expect(findReplace("YES! The danger must be shrinking, for the rowers keep on rowing, and they're certainly not showing any signs that they're slowing","shrinking","growing")).to.equal("YES! The danger must be growing, for the rowers keep on rowing, and they're certainly not showing any signs that they're slowing");
  });

  //Tarantula
  it("stores original/target/replacement, but tests capitals/lowercase", function () {
    expect(findReplace("Through the eye of the storm, With a GOLDEN lining, To the point where it breaks, Gonna keep on grinding", "golden", "silver")).to.equal("Through the eye of the storm, With a silver lining, To the point where it breaks, Gonna keep on grinding");
  });

  //Under the Waves
  it("Tests a crazy-capitals case and replaces it with a different but regular looking word", function () {
    expect(findReplace("I am deep in a OcEaN, Waves above my head, Help with no spirit", "OCEAN", "river"));
  });

  // No theme for this one. . .
  it("tests one last case with strange or mistyped non comma/space/letters", function () {
    expect(findReplace("Ap!pl*e computers", "apple", "Apple"));
  });

});
