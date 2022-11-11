import { assertEquals, assertThrows } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { clean } from "./phone-number.ts";

describe("Phone Number", () => {
  describe("Cleanup user-entered phone numbers", () => {
    it("cleans the number", () => {
      assertEquals(clean("(223) 456-7890"), "2234567890");
    });

    it.ignore("cleans numbers with dots", () => {
      assertEquals(clean("223.456.7890"), "2234567890");
    });

    it.ignore("cleans numbers with multiple spaces", () => {
      assertEquals(clean("223 456   7890   "), "2234567890");
    });

    it.ignore("invalid when 9 digits", () => {
      assertThrows(() => clean("123456789"), "Incorrect number of digits");
    });

    it.ignore("invalid when 11 digits does not start with a 1", () => {
      assertThrows(() => clean("22234567890"), "11 digits must start with 1");
    });

    it.ignore("valid when 11 digits and starting with 1", () => {
      assertEquals(clean("12234567890"), "2234567890");
    });

    it.ignore("valid when 11 digits and starting with 1 even with punctuation", () => {
      assertEquals(clean("+1 (223) 456-7890"), "2234567890");
    });

    it.ignore("invalid when more than 11 digits", () => {
      assertThrows(() => clean("321234567890"), "More than 11 digits");
    });

    it.ignore("invalid with letters", () => {
      assertThrows(() => clean("123-abc-7890"), "Letters not permitted");
    });

    it.ignore("invalid with punctuations", () => {
      assertThrows(() => clean("123-@:!-7890"), "Punctuations not permitted");
    });

    it.ignore("invalid if area code starts with 0", () => {
      assertThrows(
        () => clean("(023) 456-7890"),
        "Area code cannot start with zero",
      );
    });

    it.ignore("invalid if area code starts with 1", () => {
      assertThrows(
        () => clean("(123) 456-7890"),
        "Area code cannot start with one",
      );
    });

    it.ignore("invalid if exchange code starts with 0", () => {
      assertThrows(
        () => clean("(223) 056-7890"),
        "Exchange code cannot start with zero",
      );
    });

    it.ignore("invalid if exchange code starts with 1", () => {
      assertThrows(
        () => clean("(223) 156-7890"),
        "Exchange code cannot start with one",
      );
    });

    it.ignore("invalid if area code starts with 0 on valid 11-digit number", () => {
      assertThrows(
        () => clean("1 (023) 456-7890"),
        "Area code cannot start with zero",
      );
    });

    it.ignore("invalid if area code starts with 1 on valid 11-digit number", () => {
      assertThrows(
        () => clean("1 (123) 456-7890"),
        "Area code cannot start with one",
      );
    });

    it.ignore("invalid if exchange code starts with 0 on valid 11-digit number", () => {
      assertThrows(
        () => clean("1 (223) 056-7890"),
        "Exchange code cannot start with zero",
      );
    });

    it.ignore("invalid if exchange code starts with 1 on valid 11-digit number", () => {
      assertThrows(
        () => clean("1 (223) 156-7890"),
        "Exchange code cannot start with one",
      );
    });
  });
});
