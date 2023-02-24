pub fn squareOfSum(number: isize) isize {
    var counter: isize = 1;
    var summation: isize = 0;
    while (counter <= number) : (counter += 1) {
        summation += counter;
    }
    return summation * summation;
}

pub fn sumOfSquares(number: isize) isize {
    var counter: isize = 1;
    var summation: isize = 0;
    while (counter <= number) : (counter += 1) {
        summation += counter * counter;
    }
    return summation;
}

pub fn differenceOfSquares(number: isize) isize {
    return squareOfSum(number) - sumOfSquares(number);
}
