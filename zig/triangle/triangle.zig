pub const TriangleError = error{
    Degenerate,
    InvalidInequality,
};

pub const Triangle = struct {
    a: f64,
    b: f64,
    c: f64,

    pub fn init(first: f64, second: f64, third: f64) TriangleError!Triangle {
        try verifyIfDegenerateAttributesExist(first, second, third);
        try verifyIfTriangleInequalityHolds(first, second, third);

        return Triangle{
            .a = first,
            .b = second,
            .c = third,
        };
    }

    fn verifyIfDegenerateAttributesExist(first: f64, second: f64, third: f64) TriangleError!void {
        if (first * second * third == 0) {
            return TriangleError.Degenerate;
        }
    }

    fn verifyIfTriangleInequalityHolds(first: f64, second: f64, third: f64) TriangleError!void {
        if (first > second + third or
            second > first + third or
            third > first + second)
        {
            return TriangleError.InvalidInequality;
        }
    }

    pub fn isEquilateral(self: Triangle) bool {
        return self.a == self.b and self.b == self.c;
    }

    pub fn isIsosceles(self: Triangle) bool {
        return !self.isEquilateral() and (self.a == self.b or self.a == self.c or self.b == self.c);
    }

    pub fn isScalene(self: Triangle) bool {
        return self.a != self.b and self.a != self.c and self.b != self.c;
    }
};
