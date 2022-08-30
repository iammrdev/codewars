// https://www.codewars.com/kata/58d76854024c72c3e20000de

const reverse = (str) => {
  const reverseStr = (str) => str.split("").reverse().join("");

  return str
    .split(" ")
    .map((item, index) => (index % 2 ? reverseStr(item) : item))
    .join(" ")
    .trim();
};
