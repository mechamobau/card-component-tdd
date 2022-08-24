import callFunctionTimes from "./callFunctionTimes";

describe("callFunctionTimes", () => {
  it("calls a function x times", () => {
    const callbackMock = jest.fn();

    callFunctionTimes(10, callbackMock);

    expect(callbackMock.mock.calls.length).toBe(10);
    expect(callbackMock.mock.calls[1][0]).toBe(1);
  });
});
