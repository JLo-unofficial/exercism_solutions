export function isValid(isbn: string): boolean {
  const isbnPattern = /^\d\-?\d{3}\-?\d{5}\-?[\dX]$/;
  if (!isbn.match(isbnPattern)) {
    return false;
  }
  return isbn.split("")
        .filter((char) => char !== "-")
        .map((char, index) =>
          (10 - index) * (char === "X" ? 10 : parseInt(char))
        )
        .reduce(
          (runningTotal, currentValue) => (currentValue + runningTotal),
        ) % 11 === 0;
}
