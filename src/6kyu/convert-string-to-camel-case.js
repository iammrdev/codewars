// https://www.codewars.com/kata/517abf86da9663f1d2000003

const toCamelCase = (str) => {
  if (!str.length) {
    return str;
  }
  return str
    .split(/_|-/)
    .map((item, index) =>
      !index ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
};
