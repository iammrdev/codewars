// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

const add = (...numbers) => {
  const sum = numbers.reduce((acc, item) => item + acc, 0);
  const inner = (...rest) => add(sum, ...rest);
  inner[Symbol.toPrimitive] = () => sum;
  return inner;
};
