// https://www.codewars.com/kata/52774a314c2333f0a7000688

const validParentheses = (parens) => {
  if (parens.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (const item of parens) {
    if (item === "(") {
      stack.push(item);
    } else if (!stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
