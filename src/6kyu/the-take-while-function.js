// https://www.codewars.com/kata/54f9173aa58bce9031001548

function takeWhile(arr, pred) {
  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) {
      return arr.slice(0, i);
    }
  }
  return arr;
}
