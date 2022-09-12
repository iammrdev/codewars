// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

function deepCount(array) {
  return array.reduce(
    (acc, current) =>
      acc + 1 + (Array.isArray(current) ? deepCount(current) : 0),
    0
  );
}
