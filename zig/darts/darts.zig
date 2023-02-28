pub const Coordinate = struct {
    x: f32,
    y: f32,

    pub fn init(x_coord: f32, y_coord: f32) Coordinate {
        return Coordinate{ .x = x_coord, .y = y_coord };
    }

    pub fn score(self: Coordinate) isize {
        // Avoid using the expensive @sqrt function by squaring all values
        const distance = self.x * self.x + self.y * self.y;

        // Dart board circles' radii squared
        const inner = 1 * 1;
        const middle = 5 * 5;
        const outer = 10 * 10;

        if (distance <= inner) {
            return 10;
        } else if (distance <= middle) {
            return 5;
        } else if (distance <= outer) {
            return 1;
        } else {
            return 0;
        }
    }
};
