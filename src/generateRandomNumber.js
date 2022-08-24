function generateRandomNumber(limit) {
  const random = Math.random();

  return Math.floor(random * limit);
}

export default generateRandomNumber;
