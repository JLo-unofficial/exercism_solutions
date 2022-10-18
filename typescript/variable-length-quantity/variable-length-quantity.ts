export function encode(value: number[]): number[] {
  const result: number[] = [];
  let binaryForm = value[0].toString(2);
  while (binaryForm.length > 8) {
    result.push(parseInt(binaryForm.slice(0, 8), 2));
    binaryForm = binaryForm.slice(8);
  }
  result.push(parseInt(binaryForm, 2));
  return result;
}

export function decode(value: number[]): number[] {
  return value;
}
