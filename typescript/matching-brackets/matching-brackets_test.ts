import { assert, assertFalse } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { isPaired } from "./matching-brackets.ts";

describe("Matching Brackets", () => {
  it("paired square brackets", () => {
    assert(isPaired("[]"));
  });

  it.ignore("empty string", () => {
    assert(isPaired(""));
  });

  it.ignore("unpaired brackets", () => {
    assertFalse(isPaired("[["));
  });

  it.ignore("wrong ordered brackets", () => {
    assertFalse(isPaired("}{"));
  });

  it.ignore("wrong closing bracket", () => {
    assertFalse(isPaired("{]"));
  });

  it.ignore("paired with whitespace", () => {
    assert(isPaired("{ }"));
  });

  it.ignore("partially paired brackets", () => {
    assertFalse(isPaired("{[])"));
  });

  it.ignore("simple nested brackets", () => {
    assert(isPaired("{[]}"));
  });

  it.ignore("several paired brackets", () => {
    assert(isPaired("{}[]"));
  });

  it.ignore("paired and nested brackets", () => {
    assert(isPaired("([{}({}[])])"));
  });

  it.ignore("unopened closing brackets", () => {
    assertFalse(isPaired("{[)][]}"));
  });

  it.ignore("unpaired and nested brackets", () => {
    assertFalse(isPaired("([{])"));
  });

  it.ignore("paired and wrong nested brackets", () => {
    assertFalse(isPaired("[({]})"));
  });

  it.ignore("paired and incomplete brackets", () => {
    assertFalse(isPaired("{}["));
  });

  it.ignore("too many closing brackets", () => {
    assertFalse(isPaired("[]]"));
  });

  it.ignore("math expression", () => {
    assert(isPaired("(((185 + 223.85) * 15) - 543)/2"));
  });

  it.ignore("complex latex expression", () => {
    assert(
      isPaired(
        "\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)",
      ),
    );
  });
});
