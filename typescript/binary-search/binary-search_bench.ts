import { find } from "./binary-search.ts";

const haystack: Array<number> = [];

for (let i = 1; haystack.length < 10000; i++) {
  if (Math.round(Math.random()) === 1) {
    haystack.push(i);
  }
}

Deno.bench("Exercise find implementation", () => {
  for (let i = 0; i < haystack.length; i++) {
    find(haystack, haystack[i]);
  }
});

Deno.bench("Default `indexOf` implementation", () => {
  for (let i = 0; i < haystack.length; i++) {
    haystack.indexOf(haystack[i]);
  }
});
