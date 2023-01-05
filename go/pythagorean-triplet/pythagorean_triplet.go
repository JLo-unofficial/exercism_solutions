package pythagorean

type Triplet struct {
	a, b, c int
}

type BranchFunction func(CoprimePair) CoprimePair

type CoprimePair struct {
	m, n int
}

func Range(min, max int) (triplets []Triplet) {
	var a, b, c, square int
	triplets = make([]Triplet, 0)
	for r := 2; r < max; r += 2 {
		square = (r * r) / 2
		for s, t := range generateFactorPairs(square) {
			a = r + s
			b = r + t
			c = r + s + t
			if a > min && c <= max {
				triplets = append(triplets, Triplet{a: a, b: b, c: c})
			}

		}
	}
	return triplets
}

func generateFactorPairs(n int) map[int]int {
	result := map[int]int{}
	for i := 1; i < n; i++ {
		if n%i == 0 {
			quotient := n / i
			if quotient < i {
				break
			}
			result[i] = n / i
		}
	}
	return result
}

func Sum(sum int) []Triplet {
	result := make([]Triplet, 0)
	for _, triplet := range Range(1, sum) {
		if triplet.a + triplet.b + triplet.c != sum {
			continue
		}
		result = append(result, triplet)
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
