// https://www.codewars.com/kata/53cf7e37e9876c35a60002c9

const curryPartial = (func, ...args) => {
  const amountArgs = func.length;

  if (amountArgs <= args.length) {
    return func(...args);
  }

  return (...nextFuncArgs) => curryPartial(func, ...args, ...nextFuncArgs);
};
