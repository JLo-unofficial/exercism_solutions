pub const ComputationError = error{
    IllegalArgument,
};

pub fn steps(number: isize) anyerror!usize {
    if (number <= 0) return ComputationError.IllegalArgument;

    var numSteps: usize = 0;
    var currentNumber: usize = @bitCast(usize, number);
    while (currentNumber > 1) : (numSteps += 1) {
        currentNumber = switch (currentNumber % 2) {
            0 => currentNumber / 2,
            else => currentNumber * 3 + 1,
        };
    }
    return numSteps;
}
