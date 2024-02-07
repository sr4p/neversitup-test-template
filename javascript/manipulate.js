/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text = '') => {
  const textArray = text.split('');
  const arrSet = new Set().add(text);

  for (let i = textArray.length + 1; i >= 0; i--) {
    for (let j = 0; j <= i + 1; j++) {
      textArray.push(textArray[j]);
      textArray.splice(j, 1);
      arrSet.add(textArray.join(''));
    }
  }
  return [...arrSet].sort();
};

module.exports = {
  manipulate,
};
