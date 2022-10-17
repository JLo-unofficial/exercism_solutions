/** A robot generator keeping track of unused robot names */
class NameGenerator {
  static letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static uniqueNameCount = 26 * 26 * 10 * 10 * 10;
  private unusedNames: Array<number>;

  /** Resets unusedNames array to array from 0 to uniqueNameCount - 1*/
  constructor() {
    this.unusedNames = Array.from(
      { length: NameGenerator.uniqueNameCount },
      (_, index) => index,
    );
  }

  /**
   * Randomly select value from unusedNames and remove selected element from array
   * @returns {string} Next unused robot name
   */
  public nextName(): string {
    const nextUnusedIndex = Math.floor(Math.random() * this.unusedNames.length);
    const nextNameIndex = this.unusedNames.splice(nextUnusedIndex, 1)[0];
    return this.indexToName(nextNameIndex);
  }

  /**
   * Generate robot name from given index position
   * @param {number} index
   * @returns {string} Robot name translated from index
   */
  private indexToName(index: number): string {
    // Last three characters in name match last three digits in index
    let name = String(index % 1000).padStart(3, "0");
    index = Math.floor((index - (index % 1000)) / 1000);
    for (let i = 0; i < 2; i++) {
      name = NameGenerator.letters[index % 26] + name;
      index = Math.floor((index - (index % 26)) / 26);
    }
    return name;
  }
}

/** A robot name class*/
export class Robot {
  static names = new NameGenerator();
  private _name: string;

  constructor() {
    this._name = Robot.names.nextName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.names.nextName();
  }

  public static releaseNames(): void {
    Robot.names = new NameGenerator();
  }
}
