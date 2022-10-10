import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.159.0/testing/bdd.ts";
import { convert } from "./raindrops.ts";

describe("Raindrops", () => {
  it("converts 1", () => assertEquals(convert(1), "1"));

  it("converts 3", () => assertEquals(convert(3), "Pling"));

  it("converts 5", () => assertEquals(convert(5), "Plang"));

  it("converts 7", () => assertEquals(convert(7), "Plong"));

  it("converts 6", () => assertEquals(convert(6), "Pling"));

  it("converts 9", () => assertEquals(convert(9), "Pling"));

  it("converts 10", () => assertEquals(convert(10), "Plang"));

  it("converts 14", () => assertEquals(convert(14), "Plong"));

  it("converts 15", () => assertEquals(convert(15), "PlingPlang"));

  it("converts 21", () => assertEquals(convert(21), "PlingPlong"));

  it("converts 25", () => assertEquals(convert(25), "Plang"));

  it("converts 35", () => assertEquals(convert(35), "PlangPlong"));

  it("converts 49", () => assertEquals(convert(49), "Plong"));

  it("converts 52", () => assertEquals(convert(52), "52"));

  it("converts 105", () => assertEquals(convert(105), "PlingPlangPlong"));

  it("converts 12121", () => assertEquals(convert(12121), "12121"));
});
