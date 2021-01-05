import { reverseArray, withdraw, getAdults } from "./index";

it("should return null", () => {
  const res = reverseArray(4);
  expect(res).toEqual(null);
});

it("should get reversed numbers", () => {
  const res = reverseArray([1, 2, 3]);
  expect(res).toEqual([3, 2, 1]);
});

it("should not get same numbers", () => {
  const res = reverseArray([1, 2, 3]);
  expect(res).not.toEqual([1, 2, 3]);
});

it("should get -1", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(res).toEqual(-1);
});

it("should get positive number", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(res).toEqual(37);
});

it("should not get incorrect value", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 50, -6], "John", 40);
  expect(res).not.toEqual(11);
});

it("should get null", () => {
  const res = getAdults(4);
  expect(res).toEqual(null);
});

it("should get adults object", () => {
  const res = getAdults({ A: 19, B: 3, K: 18 });
  expect(res).toEqual({ A: 19, K: 18 });
});

it("should not get incorrect adults object", () => {
  const res = getAdults({ A: 12, K: 18, B: 56 });
  expect(res).not.toEqual({ A: 12, B: 56 });
});
