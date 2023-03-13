pub const QueenError = error{
    InitializationFailure,
};

pub const Queen = struct {
    x: u3,
    y: u3,

    pub fn init(x: isize, y: isize) QueenError!Queen {
        if (x < 0 or x > 7 or y < 0 or y > 7) return QueenError.InitializationFailure;
        return Queen{
            .x = @truncate(u3, @bitCast(usize, x)),
            .y = @truncate(u3, @bitCast(usize, y)),
        };
    }

    pub fn canAttack(self: Queen, other: Queen) QueenError!bool {
        if (self.x == other.x or self.y == other.y) return true;

        const dx = if (self.x > other.x) self.x - other.x else other.x - self.x;
        const dy = if (self.y > other.y) self.y - other.y else other.y - self.y;

        return dx == dy;
    }
};
