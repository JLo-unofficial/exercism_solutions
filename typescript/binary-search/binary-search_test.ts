import { assertEquals, assertThrows } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { find } from "./binary-search.ts";

describe("Binary Search", () => {
  it("finds a value in an array with one element", () => {
    assertEquals(find([6], 6), 0);
  });

  it("finds a value in the middle of an array", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertEquals(find(array, 6), 3);
  });

  it("finds a value at the beginning of an array", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertEquals(find(array, 1), 0);
  });

  it("finds a value at the end of an array", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertEquals(find(array, 11), 6);
  });

  it("finds a value in an array of odd length", () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634];
    assertEquals(find(array, 144), 9);
  });

  it("finds a value in an array of even length", () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    assertEquals(find(array, 21), 5);
  });

  it("identifies that a value is not included in the array", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertThrows(() => find(array, 7), "Value not in array");
  });

  it.ignore("a value smaller than the array's smallest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertThrows(() => find(array, 0), "Value not in array");
  });

  it.ignore("a value larger than the array's largest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    assertThrows(() => find(array, 13), "Value not in array");
  });

  it.ignore("nothing is found in an empty array", () => {
    assertThrows(() => find([], 1), "Value not in array");
  });

  it.ignore("nothing is found when the left and right bounds cross", () => {
    assertThrows(() => find([1, 2], 0), "Value not in array");
  });
});
