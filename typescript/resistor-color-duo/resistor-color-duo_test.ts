import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.159.0/testing/bdd.ts";
import { decodedValue } from "./resistor-color-duo.ts";

describe("Resistor Colors", () => {
  it("Brown and black", () => {
    assertEquals(decodedValue(["brown", "black"]),10);
  });

  it("Blue and grey", () => {
    assertEquals(decodedValue(["blue", "grey"]),68);
  });

  it("Yellow and violet", () => {
    assertEquals(decodedValue(["yellow", "violet"]),47);
  });

  it("Orange and orange", () => {
    assertEquals(decodedValue(["orange", "orange"]),33);
  });

  it("Ignore additional colors", () => {
    assertEquals(decodedValue(["green", "brown", "orange"]),51);
  });
});
