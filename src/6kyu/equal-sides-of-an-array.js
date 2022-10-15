// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  let acc = 0;

  for (let i = 0; i < arr.length; i++) {
    if (acc + arr[i] === sum - acc) {
      return i;
    }
    acc += arr[i];
  }
  return -1;
}
