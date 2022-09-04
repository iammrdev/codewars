// https://www.codewars.com/kata/54c27ef1fb7da0118600046a

const chain = (fns, result) => {
  return Object.entries(fns).reduce(
    (acc, [key, func]) => {
      return {
        ...acc,
        [key]: (...args) => {
          return chain(fns, result ? func(result, ...args) : func(...args));
        },
      };
    },
    { execute: () => result }
  );
};
