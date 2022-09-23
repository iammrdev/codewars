// https://www.codewars.com/kata/5894318275f2c75695000146

function deleteDigit(n) {
  const nums = [...n.toString()];
  return Math.max(
    ...nums.map((_, index) =>
      nums.filter((_, numIndex) => index !== numIndex).join("")
    )
  );
}
