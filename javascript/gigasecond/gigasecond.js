// return a new date created by adding 10^12 miliseconds to Epoch time
export const gigasecond = (inputDate) => new Date(inputDate.getTime() + 10 ** 12);
