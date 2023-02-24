const std = @import("std");
pub const ColorBand = enum {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
};

pub fn colorCode(colors: []const ColorBand) anyerror!isize {
    comptime {
        // tens position
        const a: isize = @intCast(isize, 10) * @enumToInt(colors[0]);
        // ones position
        const b: isize = @enumToInt(colors[1]);
        return a + b;
    }
}
