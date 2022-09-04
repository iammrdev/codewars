// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
  const limit = str.length;
  let round = 0;

  return () => {
    const result = str[round];
    round = round + 1 >= limit ? 0 : round + 1;
    return result;
  };
}
