import { expandGlob } from "https://deno.land/std@0.160.0/fs/expand_glob.ts";

async function generateImportMap() {
  const latestVersion = "0.160.0";
  const importMap = {
    "imports": {
      "testing/": `https://deno.land/std@${latestVersion}/testing`,
    },
  };
  await Deno.writeTextFile(
    "import_map.json",
    JSON.stringify(importMap, null, 2),
  );
}

async function generateDenoConfig() {
  const config = {
    "compilerOptions": {
      "allowJs": false,
      "strict": true,
    },
    "importMap": "import_map.json",
  };

  await Deno.writeTextFile("deno.json", JSON.stringify(config, null, 2));
}

async function deleteNodeFiles() {
  const nodeFiles = [
    "babel.config.cjs",
    "jest.config.cjs",
    "tsconfig.json",
    "package.json",
    ".eslintrc.cjs",
    ".eslintignore",
  ];
  for (const nodeFile of nodeFiles) {
    await Deno.remove(nodeFile);
  }
}

async function renameTestFile() {
  const xit = /^(?<indent>\s*)xit\(/;
  const toEqual =
    /^(?<indent>\s*)expect\((?<actual>.+)\)\.toEqual\((?<expected>.*)\)$/;
  const assertTypes: Set<string> = new Set<string>();
  for await (const jestFile of expandGlob("*.test.ts")) {
    const denoTestFile = jestFile.name.replace(".test", "_test");
    const nodeTestFile = await Deno.readTextFile(jestFile.name);
    const testLines = nodeTestFile.split("\n");
    testLines[0] = testLines[0].replace(
      /'(?<localFile>.*)'$/,
      '"$<localFile>.ts";',
    );
    testLines.unshift('import { describe, it } from "testing/bdd.ts";');
    for (let i = 0; i < testLines.length; i++) {
      if (xit.test(testLines[i])) {
        testLines[i] = testLines[i].replace(xit, "$<indent>it.ignore(");
      } else if (toEqual.test(testLines[i])) {
        assertTypes.add("assertEquals");
        testLines[i] = testLines[i].replace(
          toEqual,
          "$<indent>assertEquals($<actual>, $<expected>);",
        );
      }
    }
    testLines.unshift(
      `import { ${
        Array.from(assertTypes).join(", ")
      } } from "testing/asserts.ts";`,
    );
    Deno.writeTextFile(denoTestFile, testLines.join("\n"));
    Deno.remove(jestFile.name);
  }
}

await Promise.all([
  deleteNodeFiles(),
  generateImportMap(),
  generateDenoConfig(),
  renameTestFile(),
]);
