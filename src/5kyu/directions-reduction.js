// https://www.codewars.com/kata/550f22f4d758534c1100025a

const oppositeDirs = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  WEST: "EAST",
  EAST: "WEST",
};

const dirReduc = (arr) =>
  arr.reduce((acc, item) => {
    acc[acc.length - 1] === oppositeDirs[item] ? acc.pop() : acc.push(item);
    return acc;
  }, []);
