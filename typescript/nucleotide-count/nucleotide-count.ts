type Counter = {
  A: number;
  C: number;
  G: number;
  T: number;
};

export function nucleotideCounts(strand: string): Counter {
  const counter: Counter = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const nucleotide of strand) {
    switch (nucleotide) {
      case "A":
        counter.A++;
        break;
      case "C":
        counter.C++;
        break;
      case "G":
        counter.G++;
        break;
      case "T":
        counter.T++;
        break;
      default:
        throw "Invalid nucleotide in strand";
    }
  }
  return counter;
}
