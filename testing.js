
(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5;
  
  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim = exclaim;
})(this);

console.log(exclaim('hi!'));
console.log(EXCLAMATION_MARK_COUNT);
