// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const partsSums = (ls) => {
  let total = ls.reduce((acc, item) => acc + item, 0);
  const result = [];

  ls.forEach((item) => {
    result.push(total);
    total -= item;
  });

  return result.concat(0);
};
