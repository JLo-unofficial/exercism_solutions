export const colorValues = new Map<string, number>([
  ["black", 0],
  ["brown", 1],
  ["red", 2],
  ["orange", 3],
  ["yellow", 4],
  ["green", 5],
  ["blue", 6],
  ["violet", 7],
  ["grey", 8],
  ["white", 9],
]);

export function decodedValue(colors: string[]): number {
  let result = 0;
  let position = 10;
  for (const color of colors.slice(0, 2)) {
    result += position * colorValues.get(color)!;
    position /= 10;
  }
  return result;
}
