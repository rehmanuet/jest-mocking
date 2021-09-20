describe("Testing with multiple  data", function () {
  let data = [
    { args: [1, 3], expected: 3 },
    { args: [4, 3], expected: 12 },
    { args: [4, 4], expected: 16 },
  ];

  data.forEach(({ args, expected }) => {
    it(`should correctly multiply ${args[0]} & ${args[1]}`, function () {
      let res = args[0] * args[1];

      expect(res).toStrictEqual(expected);
    });
  });
});
