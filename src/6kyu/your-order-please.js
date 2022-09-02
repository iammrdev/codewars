// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) => {
  return words
    .split(" ")
    .sort((a, b) => {
      const [indexA] = a.split("").filter(Number);
      const [indexB] = b.split("").filter(Number);
      return indexA - indexB;
    })
    .join(" ");
};
