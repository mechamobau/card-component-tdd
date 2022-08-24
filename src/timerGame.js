export function timerGame(callback) {
  console.log("Ready... go!");
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

export function infiniteTimerGame(callback) {
  console.log("Ready...go!");

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...");
    callback && callback();

    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 100000);
  }, 1000);
}
