// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  const sort = (word) => word.split("").sort().join("");
  const sorted = sort(word);
  return words.filter((item) => sort(item) === sorted);
}
