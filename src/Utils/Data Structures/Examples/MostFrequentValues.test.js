import getFrequentValues from "./MostFrequentValues";

test("get top 2 most frequent values of - [1, 2, 3, 2, 1, 2, 4, 5, 4, 2]", () => {
  const arr = [1, 2, 3, 2, 1, 2, 4, 5, 4, 2];
  expect(getFrequentValues(arr, 2)).toEqual([2, 1]);
});

test("get top 4 most frequent values of - [1, 2, 3, 2, 1, 2, 4, 5, 4, 2]", () => {
  const arr = [1, 2, 3, 2, 1, 2, 4, 5, 4, 2];
  expect(getFrequentValues(arr, 4)).toEqual([2, 1, 4, 3]);
});
