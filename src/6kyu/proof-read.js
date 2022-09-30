// https://www.codewars.com/kata/583710f6b468c07ba1000017

function proofread(str) {
  const fixUppercase = (item) => item[0].toUpperCase() + item.slice(1);
  const fixSpelling = (item) => item.replace(/ie/g, "ei");
  return str
    .toLowerCase()
    .split(". ")
    .map(fixUppercase)
    .map(fixSpelling)
    .join(". ");
}

proofread("ShE deCIeved HiM.");
