// https://www.codewars.com/kata/54dc6f5a224c26032800005c

const stockList = (listOfArt, listOfCat) => {
  if (!listOfArt.length || !listOfCat.length) return "";

  const artByCategory = listOfArt.reduce((acc, item) => {
    const [category, amount] = item.split(" ");
    const [code] = category;
    acc[code] = (acc[code] || 0) + Number(amount);
    return acc;
  }, {});

  return listOfCat
    .map((item) => `(${item} : ${artByCategory[item] || 0})`)
    .join(" - ");
};
