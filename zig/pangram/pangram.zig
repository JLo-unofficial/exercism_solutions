const std = @import("std");

pub fn isPangram(str: []const u8) bool {
    // don't bother iterating over shorter strings
    if (str.len < 26) return false;

    var alphabet = std.StaticBitSet(26).initEmpty();

    var index: usize = undefined;
    for (str) |char| {
        if (!std.ascii.isAlphabetic(char)) continue;

        // convert each lowercase letter to alphabet index
        index = switch (std.ascii.toLower(char)) {
            inline 'a'...'z' => |letter| letter - 'a',
            else => unreachable,
        };

        alphabet.set(index);
    }

    return alphabet.count() == 26;
}
