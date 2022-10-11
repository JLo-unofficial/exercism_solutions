import { sample } from "https://deno.land/std@0.159.0/collections/sample.ts";

const numbers = "0123456789".split("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const usedNames = new Map<string, boolean>();

const generateName = (): string => {
  let name = [
    sample(letters),
    sample(letters),
    sample(numbers),
    sample(numbers),
    sample(numbers),
  ].join("");
  while (usedNames.get(name) !== undefined) {
    name = [
      sample(letters),
      sample(letters),
      sample(numbers),
      sample(numbers),
      sample(numbers),
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
