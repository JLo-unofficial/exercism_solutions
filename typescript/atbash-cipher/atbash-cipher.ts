const firstLetterIdx = "a".charCodeAt(0);
const lastLetterIdx = "z".charCodeAt(0);

function plainToCipher(letter: string): string {
  return String.fromCharCode(
    lastLetterIdx - (letter.toLowerCase().charCodeAt(0) - firstLetterIdx),
  );
}

/**
 * @param plainText - Message to encode
 * @returns Message encrypted using atbash cipher
 */
export function encode(plainText: string): string {
  return [...plainText].filter((char: string) => {
    return char !== " ";
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
  throw new Error("Remove this statement and implement this function");
}
