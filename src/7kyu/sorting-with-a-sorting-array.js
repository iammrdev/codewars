// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039

function sort(initialArray, sortingArray) {
  const result = [];

  for (let i = 0; i < initialArray.length; i++) {
    const sortIndex = sortingArray[i];
    result[sortIndex] = initialArray[i];
  }

  return result;
}
