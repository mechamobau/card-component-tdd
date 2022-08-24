import generateRandomNumber from "./generateRandomNumber";

describe("generateRandomNumber", () => {
  it("multiplies the random number with the limit", () => {
    const randomMock = jest.spyOn(global.Math, "random");
    randomMock.mockReturnValue(1);

    expect(generateRandomNumber(100)).toBe(100);

    randomMock.mockReturnValue(0.2);

    expect(generateRandomNumber(100)).toBe(20);
  });
});
