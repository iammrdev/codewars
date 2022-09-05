// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

const compose =
  (...funcs) =>
  (arg) => {
    return funcs.reduceRight((value, func) => func(value), arg);
  };
