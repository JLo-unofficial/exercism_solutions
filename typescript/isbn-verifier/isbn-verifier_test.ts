import {
  assert,
  assertFalse,
} from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.159.0/testing/bdd.ts";
import { isValid } from "./isbn-verifier.ts";

describe("ISBN Verifier", () => {
  it("valid isbn number", () => {
    assert(isValid("3-598-21508-8"));
  });

  it("invalid isbn check digit", () => {
    assertFalse(isValid("3-598-21508-9"));
  });

  it("valid isbn number with a check digit of 10", () => {
    assert(isValid("3-598-21507-X"));
  });

  it("check digit is a character other than X", () => {
    assertFalse(isValid("3-598-21507-A"));
  });

  it("invalid character in isbn", () => {
    assertFalse(isValid("3-598-2K507-0"));
  });

  it("X is only valid as a check digit", () => {
    assertFalse(isValid("3-598-2X507-9"));
  });

  it("valid isbn without separating dashes", () => {
    assert(isValid("3598215088"));
  });

  it("isbn without separating dashes and X as check digit", () => {
    assert(isValid("359821507X"));
  });

  it("isbn without check digit and dashes", () => {
    assertFalse(isValid("359821507"));
  });

  it("too long isbn and no dashes", () => {
    assertFalse(isValid("3598215078X"));
  });

  it("isbn without check digit", () => {
    assertFalse(isValid("3-598-21507"));
  });

  it("too long isbn", () => {
    assertFalse(isValid("3-598-21507-XX"));
  });

  it("check digit of X should not be used for 0", () => {
    assertFalse(isValid("3-598-21515-X"));
  });

  it("empty isbn", () => {
    assertFalse(isValid(""));
  });
});
