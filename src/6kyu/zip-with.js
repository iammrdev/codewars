// https://www.codewars.com/kata/5825792ada030e9601000782

function zipWith(fn, a0, a1) {
  const length = Math.min(a0.length, a1.length);
  return a0.slice(0, length).map((item, index) => fn(item, a1[index]));
}
