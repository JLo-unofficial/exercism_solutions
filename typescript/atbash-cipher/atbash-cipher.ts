const firstLetterIdx = "a".charCodeAt(0);
const lastLetterIdx = "z".charCodeAt(0);

function converter(letter: string): string {
  return String.fromCharCode(
    lastLetterIdx - (letter.toLowerCase().charCodeAt(0) - firstLetterIdx),
  );
}

export function encode(plainText: string): string {
  return [...plainText].filter((char: string) => {
    return char !== " ";
  }).map(converter).join("");
}

export function decode(cipherText: string): string {
  throw new Error("Remove this statement and implement this function");
}
