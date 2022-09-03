// https://www.codewars.com/kata/513fa1d75e4297ba38000003

const flatten = (...args) => {
  return args.reduce(
    (acc, item) =>
      Array.isArray(item) ? [...acc, ...flatten(...item)] : [...acc, item],
    []
  );
};
