describe("timerGame", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test("calls the callback after 1 second", () => {
    const { timerGame } = require("./timerGame");
    const callback = jest.fn();

    timerGame(callback);

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("waits 1 second before ending game", () => {
    const { timerGame } = require("./timerGame");
    timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});

describe("infiniteTimerGame", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  it("schedule a 10-second timer after 1 second", () => {
    const { infiniteTimerGame } = require("./timerGame");
    const callback = jest.fn();

    infiniteTimerGame(callback);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();

    expect(callback).toBeCalled();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100000);
  });
});
