// https://www.codewars.com/kata/555185132c0d4cca3d000197

function spyOn(func) {
  let count = 0;
  let calls = [];
  let results = [];

  const inner = (...args) => {
    const result = func(...args);
    count += 1;
    calls = [...calls, ...args];
    results = [...results, result];
    return result;
  };

  inner.callCount = () => count;
  inner.wasCalledWith = (arg) => calls.includes(arg);
  inner.returned = (arg) => results.includes(arg);

  return inner;
}
