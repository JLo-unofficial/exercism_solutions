const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const usedNames = new Map<string, boolean>();

const randomDigit = () => `${Math.round((Math.random() * 10)) % 10}`;
const randomLetter = () => letters.charAt((Math.random() * 100) % 26);

const generateName = (): string => {
  let name = [
    randomLetter(),
    randomLetter(),
    randomDigit(),
    randomDigit(),
    randomDigit(),
  ].join("");
  while (usedNames.get(name) !== undefined) {
    name = [
      randomLetter(),
      randomLetter(),
      randomDigit(),
      randomDigit(),
      randomDigit(),
    ].join("");
  }
  usedNames.set(name, true);
  return name;
};

export class Robot {
  _name: string;
  constructor() {
    this._name = generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = generateName();
  }

  public static releaseNames(): void {
    // throw new Error("Implement Robot.releaseNames");
  }
}
