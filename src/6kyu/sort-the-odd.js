// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(nums) {
  const odd = nums.filter((item) => item % 2).sort((a, b) => a - b);
  let i = 0;
  return nums.map((item) => (item % 2 ? odd[i++] : item));
}
