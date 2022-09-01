// https://www.codewars.com/kata/53697be005f803751e0015aa

const replace = (symbol, transformer) =>
  Object.keys(transformer).includes(symbol) ? transformer[symbol] : symbol;

const encode = (string) => {
  const encoder = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return [...string].map((item) => replace(item, encoder)).join("");
};

const decode = (string) => {
  const decoder = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return [...string].map((item) => replace(item, decoder)).join("");
};
