import { NameGenerator } from "./robot-name.ts";

const names = new NameGenerator();
Deno.bench("Initialize name generator", () => {
  new NameGenerator();
});

Deno.bench("Create new name", () => {
  names.nextName();
});
