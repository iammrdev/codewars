// https://www.codewars.com/kata/569512b7707bc1b88200002f

const fibonacci = (n) => {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
