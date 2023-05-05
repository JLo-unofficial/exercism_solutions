const std = @import("std");
const mem = std.mem;

pub const RnaError = error{
    IllegalDnaNucleotide,
};

pub fn toRna(allocator: mem.Allocator, dna: []const u8) (RnaError || mem.Allocator.Error)![]const u8 {
    var rna = try allocator.alloc(u8, dna.len);
    errdefer allocator.free(rna);

    for (dna) |nucleotide, i| rna[i] = switch (nucleotide) {
        'C' => 'G',
        'G' => 'C',
        'A' => 'U',
        'T' => 'A',
        else => return RnaError.IllegalDnaNucleotide,
        // If the for loop did not return early, the else block will run
    } else return rna;
}
