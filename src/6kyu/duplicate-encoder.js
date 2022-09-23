// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  const symbols = [...word].map((item) => item.toLowerCase());
  const checkSymbol = (symbol) =>
    symbols.reduce((acc, item) => (symbol === item ? acc + 1 : acc), 0) > 1;
  return symbols.reduce(
    (acc, item) => (checkSymbol(item) ? acc + ")" : acc + "("),
    ""
  );
}
