describe("makeList", function() {
  it("returns a list of numbers from 2 to 10", function() {
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(makeList(10)).to.eql(array);
  });
});

describe("sieve", function() {
  it("returns a list of numbers from 2 to 10", function() {
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sievedArray = [2, 3, 5, 7, 9];
    expect(sieve(0, array)).to.eql(sievedArray);
  });
});

describe("primeSift", function() {
  it("returns all of the prime numbers less than a number", function(){
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    var resultArray = [2, 3, 5, 7];
    expect(primeSift(10)).to.eql(resultArray);
  });
});
