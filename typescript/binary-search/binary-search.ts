/**
 * Simple binary search algorithm
 *
 * @param haystack - A sorted array of numbers to search through
 * @param needle - The target number to find in the haystack
 * @returns The haystack index where the needle is found
 * @throws Throws an error if needle not in haystack
 */
export function find(haystack: Array<number>, needle: number): number | never {
  let lowerBounds = 0;
  let upperBounds = haystack.length - 1;
  let midpoint = Math.ceil((lowerBounds + upperBounds) / 2);
  while (lowerBounds <= upperBounds) {
    if (haystack[midpoint] === needle) {
      return midpoint;
    }

    if (haystack[midpoint] > needle) {
      upperBounds = midpoint - 1;
    } else {
      lowerBounds = midpoint + 1;
    }
    midpoint = Math.floor((lowerBounds + upperBounds) / 2);
  }
  throw "Value not in array";
}
