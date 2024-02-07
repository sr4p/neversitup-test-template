const { countSmilyFace } = require('./smily');
describe('Count the smiley faces!', () => {
  const testCase = [
    { input: [':)', ';(', ';}', ':-D'], result: 2 },
    { input: [';D', ':-(', ':-)', ';~)'], result: 3 },
    { input: [';]', ':[', ';*', ':$', ';-D'], result: 1 },
  ];

  testCase.forEach(({ input, result }) => {
    it(JSON.stringify(input), () => {
      expect(countSmilyFace(input)).toEqual(result);
    });
  });
});
