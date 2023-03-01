pub const ChessboardError = error{
    IndexOutOfBounds,
};

pub fn square(index: isize) ChessboardError!u64 {
    if (index < 1 or index > 64) return ChessboardError.IndexOutOfBounds;

    // create base as u64
    const base: u64 = 1;

    // shiftAmount needs to be of type u(log2(64))
    const shiftAmount: u6 = @truncate(u6, @bitCast(usize, index - 1));
    return base << shiftAmount;
}

pub fn total() u64 {
    // use saturating bit shift left operator
    return @as(u64, 1) <<| 64;
}
