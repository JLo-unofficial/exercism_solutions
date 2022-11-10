import { assertEquals, assertThrows } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { steps } from "./collatz-conjecture.ts";

describe("CollatzConjecture", () => {
  it("zero steps for one", () => {
    const expected = 0;
    assertEquals(steps(1), expected);
  });

  it.ignore("divide if even", () => {
    const expected = 4;
    assertEquals(steps(16), expected);
  });

  it.ignore("even and odd steps", () => {
    const expected = 9;
    assertEquals(steps(12), expected);
  });

  it.ignore("Large number of even and odd steps", () => {
    const expected = 152;
    assertEquals(steps(1000000), expected);
  });

  it.ignore("zero is an error", () => {
    const expected = "Only positive numbers are allowed";

    assertThrows(() => {
      steps(0);
    }, expected);
  });

  it.ignore("negative value is an error", () => {
    const expected = "Only positive numbers are allowed";
    assertThrows(() => {
      steps(-15);
    }, expected);
  });
});
