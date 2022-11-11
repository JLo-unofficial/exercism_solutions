import { steps, stepsFfi } from "./collatz-conjecture.ts";
import { count } from "./bindings/bindings.ts";

const numSteps = 1000000000;

Deno.bench("Plain typescript", () => {
  steps(numSteps);
});

Deno.bench("Wrapped FFI Function", () => {
  stepsFfi(numSteps);
});

Deno.bench("Pure FFI Function", () => {
  count(numSteps);
});
