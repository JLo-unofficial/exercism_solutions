export function find(haystack: Array<number>, needle: number): number | never {
  let lowerBounds = 0;
  let upperBounds = haystack.length;
  let midpoint = Math.floor((lowerBounds + upperBounds) / 2);

  while (lowerBounds < upperBounds) {
    if (haystack[midpoint] === needle) {
      return midpoint;
    }

    if (haystack[midpoint] > needle) {
      upperBounds = midpoint;
    } else {
      lowerBounds = midpoint;
    }
    midpoint = Math.floor((lowerBounds + upperBounds) / 2);
  }
  throw "Value not in array";
}
