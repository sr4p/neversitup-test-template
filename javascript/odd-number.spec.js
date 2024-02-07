const { findOddNumber } = require('./odd-number');
describe('Find the odd int', () => {
  const testCase = [
    { input: [7], result: 7 },
    { input: [0], result: 0 },
    { input: [1, 1, 2], result: 2 },
    { input: [0, 1, 0, 1, 0], result: 0 },
    { input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], result: 4 },
  ];

  testCase.forEach(({ input, result }) => {
    it(JSON.stringify(input), () => {
      expect(findOddNumber(input)).toEqual(result);
    });
  });
});
