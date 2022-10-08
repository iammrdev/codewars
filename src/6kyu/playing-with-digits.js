// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
  const sum = n
    .toString()
    .split("")
    .reduce((acc, item, index) => acc + item ** (p + index), 0);
  const result = sum / n;
  return sum % n ? -1 : result;
}
