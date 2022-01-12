const moveZerosToTheEnd = function (arr) {
  const filtered = arr.filter((item) => item !== 0);
  const filteredZero = arr.filter((item) => item === 0);
  return [...filtered, ...filteredZero];
};

moveZerosToTheEnd(); // to get rid of eslint error
