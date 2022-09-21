// https://www.codewars.com/kata/529b54d9aba78c924d00088e

var format = function (str, obj) {
  return str
    .split(" ")
    .map((item) => {
      if (item.includes("{") && item.includes("}")) {
        const closeKeyIndex = item.indexOf("}");
        const key = item.slice(1, closeKeyIndex);
        const value = obj[key];
        return value !== undefined
          ? `${value}${item.slice(closeKeyIndex + 1)}`
          : item;
      }
      return item;
    })
    .join(" ");
};
