// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  if (!b.length) {
    return a;
  }
  return a.filter((itemA) => b.every((itemB) => itemA !== itemB));
}
