// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

const sortAnimal = (animals) => {
  if (!animals) {
    return animals;
  }
  return [...animals].sort((animal1, animal2) => {
    return (
      animal1.numberOfLegs - animal2.numberOfLegs ||
      animal1.name.localeCompare(animal2.name)
    );
  });
};
