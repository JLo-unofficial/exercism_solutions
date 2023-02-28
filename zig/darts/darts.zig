pub const Coordinate = struct {
    x: f32,
    y: f32,

    pub fn init(x_coord: f32, y_coord: f32) Coordinate {
        return Coordinate{ .x = x_coord, .y = y_coord };
    }
    pub fn score(self: Coordinate) isize {
        const hypotenuse = @sqrt(self.x * self.x + self.y * self.y);
        if (hypotenuse <= 1) {
            return 10;
        } else if (hypotenuse <= 5) {
            return 5;
        } else if (hypotenuse <= 10) {
            return 1;
        } else {
            return 0;
        }
    }
};
