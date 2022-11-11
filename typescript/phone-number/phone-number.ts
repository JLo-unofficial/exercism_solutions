const isValidAreaCode = (phoneNumber: string) => /^[^01]/.test(phoneNumber);
const isValidExchangeCode = (phoneNumber: string) =>
  /^\d{3}[^01]/.test(phoneNumber);

export function clean(messyNumber: string): string {
  let phoneNumber = [...messyNumber]
    .filter((char: string) => /\d/.test(char))
    .join("");

  if (phoneNumber.length === 11) {
    if (phoneNumber[0] !== "1") {
      throw "11 digits must start with 1";
    }
    phoneNumber = phoneNumber.substring(1);
  }

  if (phoneNumber.length !== 10) {
    throw "Incorrect number of digits";
  }

  if (!isValidAreaCode(phoneNumber)) {
    if (phoneNumber[0] === "0") {
      throw "Area code cannot start with zero";
    }
    throw "Area code cannot start with one";
  }

  if (!isValidExchangeCode(phoneNumber)) {
    if (phoneNumber[3] === "0") {
      throw "Area code cannot start with zero";
    }
    throw "Area code cannot start with one";
  }

  return phoneNumber;
}
