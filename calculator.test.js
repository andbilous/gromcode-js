import { calc } from "./calculator";

it("not string", () => {
  const res = calc({});
  expect(res).toEqual(null);
});

it("add", () => {
  const res = calc("1 + 1");
  expect(res).toEqual("1 + 1 = 2");
});

it("substract", () => {
  const res = calc("2 - 1");
  expect(res).toEqual("2 - 1 = 1");
});
it("multiply", () => {
  const res = calc("2 * 2");
  expect(res).toEqual("2 * 2 = 4");
});
it("divide", () => {
  const res = calc("4 / 2");
  expect(res).toEqual("4 / 2 = 2");
});
