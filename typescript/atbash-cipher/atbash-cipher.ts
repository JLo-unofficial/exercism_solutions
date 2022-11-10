/** Index for lowercase 'a' */
const aCharIdx = "a".charCodeAt(0);

/** Index for lowercase 'z' */
const zCharIdx = "z".charCodeAt(0);

/**
 * Converts a plaintext character into its corresponding Atbash cipher character
 *
 * @param plainChar - An alphanumeric string of length 1
 * @returns Corresponding ciphertext character
 */
const plainToCipher = (plainChar: string): string => {
  if (/\d/.test(plainChar)) {
    return plainChar;
  }
  return String.fromCharCode(
    zCharIdx - (plainChar.toLowerCase().charCodeAt(0) - aCharIdx),
  );
};

/**
 * Converts an Atbash ciphertext character to its corresponding plaintext character
 *
 * @param cipherChar - Atbash cipher character
 * @returns Corresponding plaintext character
 */
const cipherToPlain = (cipherChar: string): string => {
  if (/\d/.test(cipherChar)) {
    return cipherChar;
  }
  return String.fromCharCode(
    aCharIdx + (zCharIdx - cipherChar.charCodeAt(0)),
  );
};

/**
 * Higher order function returning a function to group characters
 * into groups of arbitrary lengths
 *
 * @param groupLength - Desired length of Atbash ciphertext groups
 * @returns Function
 */
const createGroupsOfLength =
  (groupLength: number) => (words: string[], letter: string): string[] => {
    const lastIdx = words.length - 1;
    const lastWord = words[lastIdx];
    if (lastWord.length < groupLength) {
      words[lastIdx] += letter;
    } else {
      words.push(letter);
    }
    return words;
  };

/**
 * Simple regex arrow function to check if a character is a digit or a letter (case-insensitive)
 *
 * @param char - Single character string
 * @returns true if the character is a digit or letter (case-insensitive)
 */
const isAlphaNumeric = (char: string): boolean => /[\dA-Za-z]/.test(char);

/**
 * Encode a plaintext message using the Atbash cipher
 *
 * @param plainText - Message to encode
 * @returns Encoded message using Atbash cipher
 */
export function encode(plainText: string): string {
  return [...plainText]
    .filter(isAlphaNumeric)
    .map(plainToCipher)
    .reduce(createGroupsOfLength(5), [""])
    .join(" ");
}

/**
 * Decode an Atbash encoded ciphertext message to plaintext
 *
 * @param cipherText - Encoded message using the Atbash cipher
 * @returns Plaintext message without any spacing
 */
export function decode(cipherText: string): string {
  return [...cipherText]
    .filter(isAlphaNumeric)
    .map(cipherToPlain)
    .join("");
}
