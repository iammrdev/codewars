// https://www.codewars.com/kata/582b59f45ad9526ae6000249/solutions

const phoneNumber = (phoneNumbers) => {
  const result = phoneNumbers.reduce((keys, numbers) => {
    [...numbers].reduce((key, number) => {
      const newKey = key + number;
      keys.add(newKey);
      return newKey;
    }, "");

    return keys;
  }, new Set());

  return result.size;
};
