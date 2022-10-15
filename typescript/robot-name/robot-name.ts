const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const uniqueNameCount = 26 * 26 * 10 * 10 * 10;

export const getName = (index: number) => {
  let name = String(index % 1000).padStart(3, "0");
  index = Math.floor((index - (index % 1000)) / 1000);
  for (let i = 0; i < 2; i++) {
    name = letters[index % 26] + name;
    index = Math.floor((index - (index % 26)) / 26);
  }
  return name;
};

class NameGenerator {
  unusedNames: Array<number>;

  constructor() {
    this.unusedNames = Array.from(
      { length: uniqueNameCount },
      (_, index) => index,
    );
  }

  public nextName(): string {
    const nextUnusedIndex = Math.floor(Math.random() * this.unusedNames.length);
    const nextIndex = this.unusedNames.splice(nextUnusedIndex, 1)[0];
    return this.indexToName(nextIndex);
  }

  private indexToName(index: number): string {
    let name = String(index % 1000).padStart(3, "0");
    index = Math.floor((index - (index % 1000)) / 1000);
    for (let i = 0; i < 2; i++) {
      name = letters[index % 26] + name;
      index = Math.floor((index - (index % 26)) / 26);
    }
    return name;
  }
}

export class Robot {
  _name: string;
  names = new NameGenerator();
  constructor() {
    this._name = this.names.nextName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.names.nextName();
  }

  public static releaseNames(): void {
    // throw new Error("Implement Robot.releaseNames");
  }
}
