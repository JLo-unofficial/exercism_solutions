package pythagorean

type Triplet struct {
	a, b, c int
}

type BranchFunction func(CoprimePair) CoprimePair

type CoprimePair struct {
	m, n int
}

func Range(min, max int) (triplets []Triplet) {
	triplets = make([]Triplet, 0)
	for a := min; a < max-2; a++ {
		for b := a + 1; b < max; b++ {
			for c := b + 1; c <= max; c++ {
				if a*a+b*b == c*c {
					triplets = append(triplets, Triplet{a: a, b: b, c: c})
				}
			}
		}
	}
	return triplets
}

func Sum(sum int) []Triplet {
	var c int
	result := make([]Triplet, 0)
	for a := 1; a <= sum/3; a++ {
		for b := a + 1; b < (sum-a)/2; b += (a % 2) + 1 {
			c = sum - (a + b)
			if a*a+b*b == c*c {
				result = append(result, Triplet{a: a, b: b, c: c})
				break
			}
		}
	}
	return result
}

func generateCoprimePairs() (nextPair CoprimePair) {
	coprimePairs := []CoprimePair{{m: 2, n: 1}, {m: 3, n: 1}}
	branchFunctions := []BranchFunction{
		func(pair CoprimePair) CoprimePair {
			return CoprimePair{
				m: pair.m - pair.n,
				n: pair.m,
			}
		},
		func(pair CoprimePair) CoprimePair {
			return CoprimePair{
				m: pair.m + pair.n,
				n: pair.m,
			}
		},
		func(pair CoprimePair) CoprimePair {
			return CoprimePair{
				m: pair.m + 2*pair.n,
				n: pair.n,
			}
		},
	}

	for {
		nextPair, coprimePairs = coprimePairs[0], coprimePairs[1:]
		for _, nextFunc := range branchFunctions {
			coprimePairs = append(coprimePairs, nextFunc(nextPair))
		}
	}
}
