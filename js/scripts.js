// Main prime sift function
var primeSift = function(n) {
  var array = makeList(n);
  var primeIndex = 0;

  while (!(array[primeIndex] === array[array.length - 1])) {
    sieve(primeIndex, array);
    primeIndex++;
  }
  return array;
};


// Helper function: generate a list of numbers from 2 to n
var makeList = function(n) {
  var array = [];
  for (var i = 0; i <= n; i++) {
    array[i] = i;
  }
  // Delete 0 and 1 from our array
  array.splice(0, 2);

  return array;
};

// Helper method: create a sieve to delete all multiples of a number
var sieve = function(primeIndex, array) {
  var prime = array[primeIndex];

  // primeIndex + 1 b/c do not want to delete prime currently used
  for(var i = (primeIndex + 1); i < array.length; i++) {
    if (array[i] % prime === 0) {
      array.splice(i, 1);
    }
  }
  return array;
};


$(document).ready(function() {
  $("form#primeSifter").submit(function(event) {
    var number = parseInt($("input#number").val());
    var primes = primeSift(number);

    // Populate data
    $(".number").text(number);
    $(".primes").text(primes);

    $("#result").show();
    event.preventDefault();
  });
});
