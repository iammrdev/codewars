// https://www.codewars.com/kata/525c65e51bf619685c000059

const cakes = (recipe, available) => {
  const times = Object.keys(recipe).map((key) =>
    available.hasOwnProperty(key) ? Math.floor(available[key] / recipe[key]) : 0
  );

  return Math.min(...times);
};
