// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

const kebabize = (str) => {
  return [...str.replace(/[^a-zA-Z]/g, "")]
    .map((item, index) =>
      item.toUpperCase() === item && index
        ? `-${item.toLowerCase()}`
        : item.toLowerCase()
    )
    .join("");
};
