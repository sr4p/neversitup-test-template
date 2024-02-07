const { manipulate } = require('./manipulate');
describe('Permutations!', () => {
  const testCase = [
    { input: 'a', result: ['a'] },
    { input: 'ab', result: ['ab', 'ba'] },
    { input: 'abc', result: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] },
    { input: 'aabb', result: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] },
  ];

  testCase.forEach(({ input, result }) => {
    it(JSON.stringify(input), () => {
      expect(manipulate(input)).toEqual(result);
    });
  });
});
