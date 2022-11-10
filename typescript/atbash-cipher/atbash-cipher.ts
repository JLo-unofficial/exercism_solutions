const firstLetterIdx = "a".charCodeAt(0);
const lastLetterIdx = "z".charCodeAt(0);

function plainToCipher(letter: string): string {
  if (/\d/.test(letter)) {
    return letter;
  }
  return String.fromCharCode(
    lastLetterIdx - (letter.toLowerCase().charCodeAt(0) - firstLetterIdx),
  );
}

function cipherToPlain(letter: string): string {
  if (/\d/.test(letter)) {
    return letter;
  }
  return String.fromCharCode(
    firstLetterIdx + (lastLetterIdx - letter.charCodeAt(0)),
  );
}

function createWordsOfLengthFive(words: string[], letter: string): string[] {
  const lastIdx = words.length - 1;
  const lastWord = words[lastIdx];
  if (lastWord.length < 5) {
    words[lastIdx] += letter;
  } else {
    words.push(letter);
  }
  return words;
}

const isAlphaNumeric = (char: string): boolean => /[\dA-Za-z]/.test(char);

/**
 * @param plainText - Message to encode
 * @returns Message encrypted using atbash cipher
 */
export function encode(plainText: string): string {
  return [...plainText]
    .filter(isAlphaNumeric)
    .map(plainToCipher)
    .reduce(createWordsOfLengthFive, [""])
    .join(" ");
}

export function decode(cipherText: string): string {
  return [...cipherText]
    .filter(isAlphaNumeric)
    .map(cipherToPlain)
    .join("");
}
