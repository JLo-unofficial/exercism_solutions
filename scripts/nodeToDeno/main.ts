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

await Promise.all([
  deleteNodeFiles(),
  generateImportMap(),
  generateDenoConfig(),
]);
