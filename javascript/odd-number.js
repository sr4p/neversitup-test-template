/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
  const dupArray = [...new Set(text)];
  let resKey = [];
  dupArray.forEach((n) => {
    const countDup = text.filter((num) => num === n).length;
    if (countDup > (resKey.at(1) || 0) && countDup % 2 === 1) resKey = [n, countDup];
  });
  const [key] = resKey;
  return key;
};

module.exports = {
  findOddNumber,
};
