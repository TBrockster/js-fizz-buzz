function fizzBuzz(number) {
  if( ((number % 3) === 0) && ((number % 5) === 0) ) {
      return "FizzBuzz";
  } else if((number % 3) === 0) {
      return "Fizz";
  } else((number % 5) === 0) {
      return "Buzz";
  }
}; 