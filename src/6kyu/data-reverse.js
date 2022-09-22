// https://www.codewars.com/kata/569d488d61b812a0f7000015

const dataReverse = (data) => {
  const BITS_LONG = 8;
  const segments = data.length / BITS_LONG;
  const result = [];
  let inc = 0;

  for (let i = 0; i < segments; i++) {
    result.unshift(...data.slice(inc, inc + BITS_LONG));
    inc += BITS_LONG;
  }
  return result;
};
