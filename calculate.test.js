const calculator = require("./calculate");
const mockedMath = require("./math");

jest.mock("./math");
mockedMath.add.mockImplementation((a, b) => {
  return a + b;
});
mockedMath.mul.mockImplementation((a, b) => {
  return a * b;
});
mockedMath.div.mockImplementation((a, b) => {
  return a / b;
});
mockedMath.sub.mockImplementation((a, b) => {
  return a - b;
});
describe("Testing Calculator", function () {
  it("Actual Function ", function () {
    expect(calculator.doMultiply(2, 3)).toEqual(6);
  });

  xit("Sample Mock Function ", function () {
    const lib = () => {
      return "bar";
    };
    const mock = jest.fn(lib);
    console.log(mock());
    expect(mock()).toBe("bar");
  });

  xit("Sample Mock Function 2 with different representation", function () {
    const mock = jest.fn().mockImplementation(() => {
      return "bar";
    });

    expect(mock()).toBe("bar");
  });
  it("mocked calculator", function () {
    expect(mockedMath.mul(2, 4)).toEqual(8);
    expect(mockedMath.mul).toHaveBeenCalledWith(2, 3);
  });
});
