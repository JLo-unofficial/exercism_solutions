const cipher: Map<string, string> = new Map<string, string>([
  ["A", "z"],
  ["B", "y"],
  ["C", "x"],
  ["D", "w"],
  ["E", "v"],
  ["F", "u"],
  ["G", "t"],
  ["H", "s"],
  ["I", "r"],
  ["J", "q"],
  ["K", "p"],
  ["L", "o"],
  ["M", "n"],
  ["N", "m"],
  ["O", "l"],
  ["P", "k"],
  ["Q", "j"],
  ["R", "i"],
  ["S", "h"],
  ["T", "g"],
  ["U", "f"],
  ["V", "e"],
  ["W", "d"],
  ["X", "c"],
  ["Y", "b"],
  ["Z", "a"],
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
  ["e", "v"],
  ["f", "u"],
  ["g", "t"],
  ["h", "s"],
  ["i", "r"],
  ["j", "q"],
  ["k", "p"],
  ["l", "o"],
  ["m", "n"],
  ["n", "m"],
  ["o", "l"],
  ["p", "k"],
  ["q", "j"],
  ["r", "i"],
  ["s", "h"],
  ["t", "g"],
  ["u", "f"],
  ["v", "e"],
  ["w", "d"],
  ["x", "c"],
  ["y", "b"],
  ["z", "a"],
]);

export function encode(plainText: string): string {
  const cipherLetters: Array<string> = [...plainText].map((letter: string) =>
    cipher.get(letter)
  );
}

export function decode(cipherText: string): string {
  throw new Error("Remove this statement and implement this function");
}
