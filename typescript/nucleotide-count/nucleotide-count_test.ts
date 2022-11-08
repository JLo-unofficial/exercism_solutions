import { assertEquals, assertThrows } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { nucleotideCounts } from "./nucleotide-count.ts";

describe("count all nucleotides in a strand", () => {
  it("empty strand", () => {
    const expected = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };
    assertEquals(nucleotideCounts(""), expected);
  });

  it("can count one nucleotide in single-character input", () => {
    const expected = {
      A: 0,
      C: 0,
      G: 1,
      T: 0,
    };
    assertEquals(nucleotideCounts("G"), expected);
  });

  it("strand with repeated nucleotide", () => {
    const expected = {
      A: 0,
      C: 0,
      G: 7,
      T: 0,
    };
    assertEquals(nucleotideCounts("GGGGGGG"), expected);
  });

  it("strand with multiple nucleotides", () => {
    const expected = {
      A: 20,
      C: 12,
      G: 17,
      T: 21,
    };
    assertEquals(
      nucleotideCounts(
        "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC",
      ),
      expected,
    );
  });

  it("strand with invalid nucleotides", () => {
    const expected = "Invalid nucleotide in strand";
    assertThrows(() => {
      nucleotideCounts("AGXXACT");
    }, expected);
  });
});
