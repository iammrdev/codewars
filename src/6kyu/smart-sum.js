// https://www.codewars.com/kata/5831200eb812b8016d000094

function smartSum(...args) {
  return args.reduce(
    (acc, item) => (Array.isArray(item) ? acc + smartSum(...item) : acc + item),
    0
  );
}
