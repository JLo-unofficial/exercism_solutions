import { assert, assertFalse } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { isPaired } from "./matching-brackets.ts";

describe("Matching Brackets", () => {
  it("paired square brackets", () => {
    assert(isPaired("[]"));
  });

  it("empty string", () => {
    assert(isPaired(""));
  });

  it("unpaired brackets", () => {
    assertFalse(isPaired("[["));
  });

  it("wrong ordered brackets", () => {
    assertFalse(isPaired("}{"));
  });

  it("wrong closing bracket", () => {
    assertFalse(isPaired("{]"));
  });

  it("paired with whitespace", () => {
    assert(isPaired("{ }"));
  });

  it("partially paired brackets", () => {
    assertFalse(isPaired("{[])"));
  });

  it("simple nested brackets", () => {
    assert(isPaired("{[]}"));
  });

  it("several paired brackets", () => {
    assert(isPaired("{}[]"));
  });

  it("paired and nested brackets", () => {
    assert(isPaired("([{}({}[])])"));
  });

  it("unopened closing brackets", () => {
    assertFalse(isPaired("{[)][]}"));
  });

  it("unpaired and nested brackets", () => {
    assertFalse(isPaired("([{])"));
  });

  it("paired and wrong nested brackets", () => {
    assertFalse(isPaired("[({]})"));
  });

  it("paired and incomplete brackets", () => {
    assertFalse(isPaired("{}["));
  });

  it("too many closing brackets", () => {
    assertFalse(isPaired("[]]"));
  });

  it("math expression", () => {
    assert(isPaired("(((185 + 223.85) * 15) - 543)/2"));
  });

  it("complex latex expression", () => {
    assert(
      isPaired(
        "\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)",
      ),
    );
  });
});
