const std = @import("std");
const math = std.math;
const testing = std.testing;

// Lookup table for all powers of 10 up to 10^38
const powerOfTenLut: [39]u128 = init: {
    var initial: [39]u128 = undefined;
    for (&initial) |*value, power| {
        value.* = math.pow(u128, 10, power);
    }
    break :init initial;
};

// Helper function to calculate number of digits
fn countDigits(num: u128) usize {
    var min: usize = 1;
    var max: usize = 39;
    var mid: usize = @divFloor(min + max, 2);

    while (min < max) {
        if (powerOfTenLut[mid] > num) {
            max = mid;
        } else {
            min = mid + 1;
        }
        mid = @divFloor(min + max, 2);
    }
    return mid;
}

pub fn isArmstrongNumber(num: u128) bool {
    const numDigits = countDigits(num);

    var summation: u128 = 0;
    var current: u128 = num;
    while (current > 0) {
        summation += math.pow(u128, current % 10, numDigits);
        current = @divFloor(current, 10);
    }

    return summation == num;
}
