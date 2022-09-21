// https://www.codewars.com/kata/5970df092ef474680a0000c9

function alphabetized(s) {
  return [...s.replace(/[^a-zA-ZА]/gi, "")]
    .map((letter, index) => ({ letter, index }))
    .sort(
      (a, b) =>
        a.letter.toLowerCase().charCodeAt() -
          b.letter.toLowerCase().charCodeAt() || a.index - b.index
    )
    .map((item) => item.letter)
    .join("");
}
