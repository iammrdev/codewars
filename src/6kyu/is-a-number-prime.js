// https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
