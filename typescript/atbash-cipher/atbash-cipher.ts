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

/**
 * @param plainText - Message to encode
 * @returns Message encrypted using atbash cipher
 */
export function encode(plainText: string): string {
  return [...plainText].filter((char: string) => {
    return /[\dA-Za-z]/.test(char);
  }).map(plainToCipher).reduce((words: string[], letter: string) => {
    const lastIdx = words.length - 1;
    const lastWord = words[lastIdx];
    if (lastWord.length < 5) {
      words[lastIdx] += letter;
    } else {
      words.push(letter);
    }
    return words;
  }, [""]).join(" ");
}

export function decode(cipherText: string): string {
  return [...cipherText].filter((char) => {
    return /[\dA-Za-z]/.test(char);
  }).map(cipherToPlain).join("");
}
