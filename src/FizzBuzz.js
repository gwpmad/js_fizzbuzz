function FizzBuzz() {
};

FizzBuzz.prototype.isDivisibleByThree = function(number){
  return number % 3 == 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number){
  return number % 5 == 0;
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number){
  return FizzBuzz.prototype.isDivisibleByThree(number) && FizzBuzz.prototype.isDivisibleByFive(number);
};

FizzBuzz.prototype.printer = function(number){
  if (FizzBuzz.prototype.isDivisibleByThreeAndFive(number)) {
    return 'FizzBuzz!';
  } else {
    if (FizzBuzz.prototype.isDivisibleByThree(number)) {
      return 'Fizz';
    } else if (FizzBuzz.prototype.isDivisibleByFive(number)) {
      return 'Buzz';
    } else {
      return number;
    }
  };
};
