// https://www.codewars.com/kata/5966847f4025872c7d00015b

function averageString(str) {
  if (!str) {
    return "n/a";
  }

  const values = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const strNumbers = str.split(" ");
  const numbers = strNumbers.map((item) => values.indexOf(item));
  const isValidNumbers = !numbers.includes(-1);

  if (!isValidNumbers) {
    return "n/a";
  }

  const result = Math.floor(
    numbers.reduce((acc, item) => acc + item, 0) / strNumbers.length
  );
  return values[result];
}
