// https://www.codewars.com/kata/5b773b698adeaeb6b80000df

function memo(fn) {
  const cache = new Map();

  return (arg) => {
    if (!cache.has(arg)) {
      cache.set(arg, fn(arg));
    }
    return cache.get(arg);
  };
}
