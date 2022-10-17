type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets({ minFactor, maxFactor, sum }: Options): Triplet[] {
  const result: Array<Triplet> = [];
  maxFactor = maxFactor ?? sum;
  for (let a = minFactor ?? 1; a < sum / 3; a++) {
    for (let b = a + 1; b < sum - (a + b); b++) {
      const c = sum - (a + b);
      if (c < maxFactor && a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
    2;
  }
  return result;
}

class Triplet {
  a: number;
  b: number;
  c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}
