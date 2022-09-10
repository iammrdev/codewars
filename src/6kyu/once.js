// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

function once(fn) {
  let isCalled = false;
  return (...args) => {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
  };
}
