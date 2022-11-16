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
	var a, b, c, n, k int
	result := make([]Triplet, 0)
	for pair := range generateCoprimePairs() {
		if pair.m%2+pair.n%2 != 2 {
			continue
		}
		a = pair.m * pair.n
		b = (pair.m*pair.m - pair.n*pair.n) / 2
		c = (pair.m*pair.m + pair.n*pair.n) / 2
		if a%2 == 0 {
			a, b = b, a
		}

		n = a + b + c
		if sum%n == 0 {
			k = sum / n
			result = append(result, Triplet{a: k * a, b: k * b, c: k * c})
		}
		if pair.n > sum {
			break
		}
	}
	return result
}

func generateCoprimePairs() chan CoprimePair {
	nextPair := make(chan CoprimePair)
	coprimePairs := []CoprimePair{{m: 2, n: 1}, {m: 3, n: 1}}
	branchFunctions := []BranchFunction{
		func(pair CoprimePair) CoprimePair {
			return CoprimePair{
				m: 2*pair.m - pair.n,
				n: pair.m,
			}
		},
		func(pair CoprimePair) CoprimePair {
			return CoprimePair{
				m: 2*pair.m + pair.n,
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

	go func() {
		for {
			for _, branchFunc := range branchFunctions {
				coprimePairs = append(coprimePairs, branchFunc(coprimePairs[0]))
			}
			nextPair <- coprimePairs[0]
			coprimePairs = coprimePairs[1:]
		}
	}()
	return nextPair
}
