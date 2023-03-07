// Take a look at the tests, you might have to change the function arguments
//
pub const SearchError = error{
    EmptyBuffer,
    ValueAbsent,
};

pub fn binarySearch(comptime T: type, target: usize, buffer: ?[]const T) SearchError!usize {
    if (buffer == null or buffer.?.len == 0) return SearchError.EmptyBuffer;

    var lowerBound: usize = 0;
    var upperBound: usize = buffer.?.len;
    var midPoint: usize = @divFloor(lowerBound + upperBound, 2);

    while (lowerBound < upperBound) : (midPoint = @divFloor(lowerBound + upperBound, 2)) {
        if (buffer.?[midPoint] == target) {
            return midPoint;
        }

        if (buffer.?[midPoint] > target) {
            upperBound = midPoint;
        } else {
            lowerBound = midPoint + 1;
        }
    }
    return SearchError.ValueAbsent;
}
