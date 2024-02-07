/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text = []) => {
  const regex = /^[:|;][-|~]?[)|D]/;
  let count = 0;
  text.forEach((v) => {
    if (regex.test(v)) count++;
  });

  return count;
};

module.exports = {
  countSmilyFace,
};
