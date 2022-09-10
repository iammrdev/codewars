// https://www.codewars.com/kata/52859abdf8fc1b12e0000141

function flattenMap(map) {
  const iter = (obj, ancs = []) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      const newAncs = [...ancs, key];
      const isNotObject = [
        !value,
        typeof value !== "object",
        Array.isArray(value),
      ].some(Boolean);
      return isNotObject
        ? { [newAncs.join("/")]: value }
        : iter(value, newAncs);
    });
  };
  const mapped = iter(map, []);
  const flat = (arr) =>
    arr.reduce(
      (acc, item) =>
        Array.isArray(item) ? [...acc, ...flat(item)] : [...acc, item],
      []
    );
  return flat(mapped).reduce((acc, item) => ({ ...acc, ...item }), {});
}
