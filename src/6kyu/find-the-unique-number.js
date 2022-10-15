// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f

function findUnique(numbers) {
  const count = {};
  numbers.forEach((item) => {
    count[item] = item in count ? count[item] + 1 : 1;
  });
  return Number(Object.keys(count).find((item) => count[item] === 1));
}
