/** A robot generator keeping track of unused robot names */
export class NameGenerator {
  static readonly #alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static readonly #uniqueNameCount = 26 * 26 * 10 * 10 * 10;
  // Array of indices corresponding to alphabetically sorted list of unique names
  #unusedNames: Array<number>;

  /** Initialize unusedNames array as integer index array
   * from 0 to ({@link NameGenerator.#uniqueNameCount} - 1) */
  constructor() {
    this.#unusedNames = Array.from(
      { length: NameGenerator.#uniqueNameCount },
      (_, index) => index,
    );
  }

  /**
   * Randomly select index value from {@link NameGenerator.#unusedNames}
   * and remove selected element from array
   * @returns {string} Next unused robot name
   */
  public nextName(): string {
    const nextUnusedIndex = Math.floor(
      Math.random() * this.#unusedNames.length,
    );
    const nextNameIndex = this.#unusedNames.splice(nextUnusedIndex, 1)[0];
    return this.#indexToName(nextNameIndex);
  }

  /**
   * Generate robot name from given index position
   * @param {number} index
   * @returns {string} Robot name translated from index
   */
  #indexToName(index: number): string {
    // Last three characters in name match last three digits in index
    let name = String(index % 1000).padStart(3, "0");
    index = Math.floor((index - (index % 1000)) / 1000);
    for (let i = 0; i < 2; i++) {
      name = NameGenerator.#alphabet[index % 26] + name;
      index = Math.floor((index - (index % 26)) / 26);
    }
    return name;
  }
}

/** A newly created robot */
export class Robot {
  static #names = new NameGenerator();
  #name: string;

  constructor() {
    this.#name = Robot.#names.nextName();
  }

  /** Return robot's current name */
  public get name(): string {
    return this.#name;
  }

  /** Reset current name and assign new unique unused name */
  public resetName(): void {
    this.#name = Robot.#names.nextName();
  }

  /** Allow used names to be reused*/
  public static releaseNames(): void {
    Robot.#names = new NameGenerator();
  }
}
