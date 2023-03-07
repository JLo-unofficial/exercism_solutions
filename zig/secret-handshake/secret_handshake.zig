const std = @import("std");
const mem = std.mem;

pub const Signal = enum(u4) {
    wink = 0b1,
    double_blink = 0b10,
    close_your_eyes = 0b100,
    jump = 0b1000,
};

pub fn calculateHandshake(allocator: mem.Allocator, number: isize) mem.Allocator.Error![]const Signal {
    var handshake = std.ArrayList(Signal).init(allocator);
    defer handshake.deinit();

    for (std.enums.values(Signal)) |signal| {
        if (number & @enumToInt(signal) == @enumToInt(signal)) {
            try handshake.append(signal);
        }
    }

    // If the reverse bit is set, reverse handshake items
    if (number & 0b10000 == 0b10000) {
        mem.reverse(Signal, handshake.items);
    }

    return handshake.toOwnedSlice();
}
