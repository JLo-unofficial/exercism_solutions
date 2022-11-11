import {count} from "./bindings/bindings.ts"

export function steps(count: number): number {
  if (count < 1) {
    throw "Only positive numbers are allowed";
  }
  let counter = 0;
  while (count > 1) {
    if (count % 2 === 0) {
      count = Math.floor(count / 2);
    } else {
      count = count * 3 + 1;
    }
    counter++;
  }
  return counter;
}


export function stepsFfi(n: number): number {
  if (n < 1) {
    throw "Only positive numbers are allowed";
  }
  return count(n);
}
