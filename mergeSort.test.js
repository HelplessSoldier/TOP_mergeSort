const sortingAlgorithm = require("./mergeSort");

describe("Sorting Algorithm Test", () => {
  it("should sort an empty array", () => {
    const input = [];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([]);
  });

  it("should sort an array with one element", () => {
    const input = [42];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([42]);
  });

  it("should sort an array with multiple elements", () => {
    const input = [5, 2, 9, 3, 6];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([2, 3, 5, 6, 9]);
  });

  it("should handle duplicate elements", () => {
    const input = [5, 2, 9, 5, 6, 2];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([2, 2, 5, 5, 6, 9]);
  });

  it("should handle already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const sorted = sortingAlgorithm(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });
});
