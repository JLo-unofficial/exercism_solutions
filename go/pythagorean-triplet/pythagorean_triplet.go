package pythagorean

type Triplet struct {
	a, b, c int
}

func Range(min, max int) []Triplet {
	result := make([]Triplet, 0)
	for a := min; a < max-2; a++ {
		for b := a + 1; b < max; b++ {
			for c := b + 1; c <= max; c++ {
				if a*a+b*b == c*c {
					result = append(result, Triplet{a: a, b: b, c: c})
				}
			}
		}
	}
	return result
}

func Sum(sum int) []Triplet {
	var c int
	result := make([]Triplet, 0)
	for a := 1; a < sum-2; a++ {
		for b := a + 1; b < sum; b++ {
			c = sum - (a + b)
			if a*a+b*b == c*c {
				result = append(result, Triplet{a: a, b: b, c: c})
			}
		}
	}
	return result
}
