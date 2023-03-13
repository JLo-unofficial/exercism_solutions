const std = @import("std");

pub fn isIsogram(str: []const u8) bool {
    var alphabet = std.bit_set.IntegerBitSet(26).initEmpty();

    var index: usize = undefined;
    for (str) |char| {
        if (!std.ascii.isAlphabetic(char)) continue;

        index = switch (std.ascii.toLower(char)) {
            inline 'a'...'z' => |letter| letter - 'a',
            else => unreachable,
        };

        if (alphabet.isSet(index)) return false;

        alphabet.set(index);
    } else return true;
}
