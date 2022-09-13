// https://www.codewars.com/kata/535e88e608035176670014b8

function detectInt(...checks) {
  let number = 1;

  if (!checks.length) {
    return number;
  }

  while (true) {
    if (checks.every((check) => check(number))) {
      return number;
    }
    number += 1;
  }
}
