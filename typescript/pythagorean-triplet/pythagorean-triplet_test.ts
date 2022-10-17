import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.159.0/testing/bdd.ts";
import { triplets } from "./pythagorean-triplet.ts";

type Triplet = [number, number, number];

function tripletsWithSum(sum: number, options = {}): Triplet[] {
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b)
  );
}

describe("Triplet", () => {
  it("triplets whose sum is 12", () => {
    assertEquals(tripletsWithSum(12), [[3, 4, 5]]);
  });

  it("triplets whose sum is 108", () => {
    assertEquals(tripletsWithSum(108), [[27, 36, 45]]);
  });

  it("triplets whose sum is 1000", () => {
    assertEquals(tripletsWithSum(1000), [[200, 375, 425]]);
  });

  it("no matching triplets for 1001", () => {
    assertEquals(tripletsWithSum(1001), []);
  });

  it("returns all matching triplets", () => {
    assertEquals(tripletsWithSum(90), [
      [9, 40, 41],
      [15, 36, 39],
    ]);
  });

  it("several matching triplets", () => {
    assertEquals(tripletsWithSum(840), [
      [40, 399, 401],
      [56, 390, 394],
      [105, 360, 375],
      [120, 350, 370],
      [140, 336, 364],
      [168, 315, 357],
      [210, 280, 350],
      [240, 252, 348],
    ]);
  });

  it("returns triplets with no factor smaller than minimum factor", () => {
    assertEquals(tripletsWithSum(90, { minFactor: 10 }), [[15, 36, 39]]);
  });

  it("returns triplets with no factor larger than maximum factor", () => {
    assertEquals(tripletsWithSum(840, { maxFactor: 349 }), [[240, 252, 348]]);
  });

  it("returns triplets with factors in range", () => {
    assertEquals(tripletsWithSum(840, { maxFactor: 352, minFactor: 150 }), [
      [210, 280, 350],
      [240, 252, 348],
    ]);
  });

  it("triplets for large number", () => {
    assertEquals(tripletsWithSum(30000), [
      [1200, 14375, 14425],
      [1875, 14000, 14125],
      [5000, 12000, 13000],
      [6000, 11250, 12750],
      [7500, 10000, 12500],
    ]);
  });
});
