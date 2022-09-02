// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

const findOutlier = (integers) => {
  const comparator = Math.abs(integers.find((item) => item !== 0) % 2);
  const filtered = integers.filter((item) => Math.abs(item % 2) !== comparator);
  return filtered.length > 1
    ? integers.find((item) => !filtered.includes(item))
    : filtered[0];
};
