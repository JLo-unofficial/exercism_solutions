const isBracket = (char: string): boolean => /[\(\)\{\}\[\]]/.test(char);

const complement: Map<string, string> = new Map<string, string>([
  ["[", "]"],
  ["{", "}"],
  ["(", ")"],
]);

export function isPaired(input: string): boolean {
  const stack: Array<string> = [];
  for (const char of input) {
    if (!isBracket(char)) {
      continue;
    }

    stack.push(char);
    if (stack.length < 2) {
      continue;
    }

    if (stack[stack.length - 1] === complement.get(stack[stack.length - 2])) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}
