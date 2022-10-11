import {
  assertEquals,
  assertMatch,
  assertNotEquals,
} from "https://deno.land/std@0.159.0/testing/asserts.ts";
import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.159.0/testing/bdd.ts";
import { Robot } from "./robot-name.ts";

const areSequential = (name1: string, name2: string): boolean => {
  const alpha1 = name1.substring(0, 2);
  const alpha2 = name2.substring(0, 2);
  const num1 = Number(name1.substring(2, 3));
  const num2 = Number(name2.substring(2, 3));

  const numDiff = num2 - num1;
  const alphaDiff = (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26 +
    (alpha2.charCodeAt(1) - alpha1.charCodeAt(1));

  const totalDiff = alphaDiff * 1000 + numDiff;

  return Math.abs(totalDiff) <= 1;
};

const NAME_RE = /^[A-Z]{2}\d{3}$/;
const TOTAL_NUMBER_OF_NAMES = 26 * // A-Z
  26 * // A-Z
  10 * // 0-9
  10 * // 0-9
  10; // 0-9

describe("Robot", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  afterEach(() => {
    Robot.releaseNames();
  });

  it("has a name", () => {
    assertMatch(robot.name, NAME_RE);
  });

  it("name is the same each time", () => {
    assertEquals(robot.name, robot.name);
  });

  it("different robots have different names", () => {
    const differentRobot = new Robot();
    assertNotEquals(differentRobot.name, robot.name);
  });

  it("is able to reset the name", () => {
    const originalName = robot.name;

    robot.resetName();
    const newName = robot.name;

    assertMatch(newName, NAME_RE);
    assertNotEquals(originalName, newName);
  });

  it("should set a unique name after reset", () => {
    const NUMBER_OF_ROBOTS = 10000;
    const usedNames = new Set();

    usedNames.add(robot.name);
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.resetName();
      usedNames.add(robot.name);
    }

    assertEquals(usedNames.size, NUMBER_OF_ROBOTS + 1);
  });

  it("new names should not be sequential", () => {
    const name1 = robot.name;
    const name2 = new Robot().name;
    const name3 = new Robot().name;
    assertEquals(areSequential(name1, name1), true);
    assertEquals(areSequential(name1, name2), false);
    assertEquals(areSequential(name2, name3), false);
  });

  it("names from reset should not be sequential", () => {
    const name1 = robot.name;
    robot.resetName();
    const name2 = robot.name;
    robot.resetName();
    const name3 = robot.name;
    assertEquals(areSequential(name1, name2), false);
    assertEquals(areSequential(name2, name3), false);
    assertEquals(areSequential(name3, name3), true);
  });

  it("uses all letters", () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 1000 - 1; i += 1) {
      const newRobot = new Robot();
      const lettersInName = newRobot.name.slice(0, 2);
      letters = letters.replace(lettersInName[0], "");
      letters = letters.replace(lettersInName[1], "");

      if (letters.length === 0) {
        break;
      }
    }
    assertEquals(letters, "");
  });

  it("uses all numbers", () => {
    let numbers = "0123456789";

    for (let i = 0; i < 1000 - 1; i += 1) {
      const newRobot = new Robot();
      const digitsInName = newRobot.name.slice(2, 5);
      numbers = numbers.replace(digitsInName[0], "");
      numbers = numbers.replace(digitsInName[1], "");
      numbers = numbers.replace(digitsInName[2], "");

      if (numbers.length === 0) {
        break;
      }
    }
    assertEquals(numbers, "");
  });

  // This test is optional.
  //
  // This test doesn't run on our online test runner because it will time-out
  // with most implementations. It's up to you to test your solution locally.
  it.ignore("all the names can be generated", () => {
    const usedNames = new Set();
    usedNames.add(robot.name);

    for (let i = 0; i < TOTAL_NUMBER_OF_NAMES - 1; i += 1) {
      const newRobot = new Robot();
      usedNames.add(newRobot.name);
    }

    assertEquals(usedNames.size, TOTAL_NUMBER_OF_NAMES);
  });
});
