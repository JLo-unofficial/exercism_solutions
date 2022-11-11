export function clean(messyNumber: string): string {
  const numbersOnly = [...messyNumber].filter((char: string) => /\d/.test(char))
    .join("");
  return numbersOnly;
}
