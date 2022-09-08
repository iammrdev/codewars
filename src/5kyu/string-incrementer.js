// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

const incrementString = (str) =>
  str.replace(/(\d+)?$/, (match) =>
    (+match + 1).toString().padStart(match.length, 0)
  );
