import { reverseArray, withdraw, getAdults } from "./index";

it("reverseArray null test", () => {
  const res = reverseArray(4);
  expect(res).toEqual(null);
});

it("reverseArray positive test", () => {
  const res = reverseArray([1, 2, 3]);
  expect(res).toEqual([3, 2, 1]);
});

it("reverseArray negative test", () => {
  const res = reverseArray([1, 2, 3]);
  expect(res).not.toEqual([1, 2, 3]);
});

it("withdraw negative balance test", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(res).toEqual(-1);
});

it("withdraw positive test", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(res).toEqual(37);
});

it("withdraw negative test", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 50, -6], "John", 40);
  expect(res).not.toEqual(11);
});

it("getAdults null test", () => {
  const res = getAdults(4);
  expect(res).toEqual(null);
});

it("getAdults positive test", () => {
  const res = getAdults({ A: 19, B: 3, K: 18 });
  expect(res).toEqual({ A: 19, K: 18 });
});

it("getAdults negative test", () => {
  const res = getAdults({ A: 12, K: 18, B: 56 });
  expect(res).not.toEqual({ A: 12, B: 56 });
});
