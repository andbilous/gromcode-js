const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return Math.pow(Math.min(...arr.map((item) => Math.abs(item))), 2);
};

export default getMinSquaredNumber;
