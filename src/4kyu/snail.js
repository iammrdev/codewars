// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const snail = (array) => {
  const result = [];

  while (array.length) {
    result.push(...array.shift());
    array.forEach((item) => result.push(item.pop()));
    array.reverse().forEach((item) => item.reverse());
  }

  return result;
};
