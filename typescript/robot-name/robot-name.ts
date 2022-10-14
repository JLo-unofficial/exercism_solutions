const digits = "0123456789";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class NameDatabase {
  _names: string[] = [];
  nameIndices: number[] = Array.from(Array(26 * 26 * 10 * 10 * 10).keys());

  constructor() {
    for (let l0 = 0; l0 < letters.length; l0++) {
      for (let l1 = 0; l1 < letters.length; l1++) {
        for (let d0 = 0; d0 < digits.length; d0++) {
          for (let d1 = 0; d1 < digits.length; d1++) {
            for (let d2 = 0; d2 < digits.length; d2++) {
              this._names.push(
                letters[l0] + letters[l1] + digits[d0] + digits[d1] +
                  digits[d2],
              );
            }
          }
        }
      }
    }
    this.resetNames();
  }

  public generateName(): string {
    const next = this.nameIndices.shift();
    if (typeof next === "undefined") {
      throw "All names have been exhausted!";
    }
    return this._names[next];
  }

  public resetNames() {
    this.nameIndices = Array.from(this._names.keys());
    for (let i = this.nameIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.nameIndices[i];
      this.nameIndices[i] = this.nameIndices[j];
      this.nameIndices[j] = temp;
    }
  }
}

export class Robot {
  _name: string;
  names = new NameDatabase();
  constructor() {
    this._name = this.names.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.names.generateName();
  }

  public static releaseNames(): void {
    // throw new Error("Implement Robot.releaseNames");
  }
}
