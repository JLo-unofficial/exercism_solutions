import { assertEquals } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import { decode, encode } from "./atbash-cipher.ts";

describe("AtbashCipher", () => {
  describe("encoding", () => {
    it("encode yes", () => {
      const cipherText = encode("yes");
      assertEquals(cipherText, "bvh");
    });

    it("encode no", () => {
      const cipherText = encode("no");
      assertEquals(cipherText, "ml");
    });

    it("encode OMG", () => {
      const cipherText = encode("OMG");
      assertEquals(cipherText, "lnt");
    });

    it("encode spaces", () => {
      const cipherText = encode("O M G");
      assertEquals(cipherText, "lnt");
    });

    it("encode mindblowingly", () => {
      const cipherText = encode("mindblowingly");
      assertEquals(cipherText, "nrmwy oldrm tob");
    });

    it("encode numbers", () => {
      const cipherText = encode("Testing,1 2 3, testing.");
      assertEquals(cipherText, "gvhgr mt123 gvhgr mt");
    });

    it("encode deep thought", () => {
      const cipherText = encode("Truth is fiction.");
      assertEquals(cipherText, "gifgs rhurx grlm");
    });

    it("encode all the letters", () => {
      const cipherText = encode("thequickbrownfoxjumpsoverthelazydog");
      assertEquals(cipherText, "gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt");
    });
  });

  describe("decode", () => {
    it("decode exercism", () => {
      const plainText = decode("vcvix rhn");
      assertEquals(plainText, "exercism");
    });

    it("decode a sentence", () => {
      const cipherText = decode("zmlyh gzxov rhlug vmzhg vkkrm thglm v");
      assertEquals(cipherText, "anobstacleisoftenasteppingstone");
    });

    it("decode numbers", () => {
      const plainText = decode("gvhgr mt123 gvhgr mt");
      assertEquals(plainText, "testing123testing");
    });

    it("decode all the letters", () => {
      const cipherText = decode("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt");
      assertEquals(cipherText, "thequickbrownfoxjumpsoverthelazydog");
    });
  });
});
