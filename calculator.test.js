import getSum, { getSquaredArray, getOddNumbers } from "./calculator";

it("getSquaredArray test", () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it("getOddNumbers test", () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it("getSum test", () => {
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});
