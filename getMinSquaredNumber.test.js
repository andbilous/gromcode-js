import getMinSquaredNumber from "./getMinSquaredNumber";

it("if empty string", () => {
  const res = getMinSquaredNumber("");
  expect(res).toEqual(null);
});

it("if empty array", () => {
  const res = getMinSquaredNumber([]);
  expect(res).toEqual(Infinity);
});

it("positive test", () => {
  const res = getMinSquaredNumber([-777, 3, -2]);
  expect(res).toEqual(4);
});
