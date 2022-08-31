// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

const createMessage = (word) => {
  function iter(newWord) {
    return newWord ? createMessage(word + " " + newWord) : word;
  }
  return iter;
};
