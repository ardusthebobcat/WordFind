var findReplace = function(original, target, replacement) {
  var modified = original.replace(target, replacement);
  var testCaps = original.toLowerCase().replace(target.toLowerCase(),replacement.toLowerCase());

  if (modified.toLowerCase() != testCaps) {
    var arrModified = modified.split(" ");
    var arrTestCaps = testCaps.split(" ");
    for (var count = 0; count < arrModified.length; count++) {
      if (arrModified[count].toLowerCase().replace(/[^a-z\n\t ,]/ig, "") != arrTestCaps[count].toLowerCase()) {
        arrModified[count] = replacement;
      }
    }
    modified = arrModified.join(" ");
    return modified;
    //return "Not equal (!=). If statement success. |**|".concat(modified).concat("|**|").concat(testCaps);
  }
  return modified;
};
