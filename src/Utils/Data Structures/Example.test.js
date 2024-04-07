import checkValidString from "./Examples";

test("simple balanced string - () should return true", () => {
  expect(checkValidString("()")).toBe(true);
});

test("simple un-balanced string - (( should return false", () => {
  expect(checkValidString("((")).toBe(false);
});
