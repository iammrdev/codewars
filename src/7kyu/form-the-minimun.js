// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

const minValue = (values) => Number([...new Set(values)].sort().join(""));
