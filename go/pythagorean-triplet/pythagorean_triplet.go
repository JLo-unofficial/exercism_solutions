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

func generateCoprimePairs() chan CoprimePair {
	nextPair := make(chan CoprimePair)
	coprimePairs := []CoprimePair{{m: 2, n: 1}, {m: 3, n: 1}}

	go func() {
		for {
			coprimePairs = append(coprimePairs, CoprimePair{m: 2*coprimePairs[0].m - coprimePairs[0].n, n: coprimePairs[0].m})
			coprimePairs = append(coprimePairs, CoprimePair{m: 2*coprimePairs[0].m + coprimePairs[0].n, n: coprimePairs[0].m})
			coprimePairs = append(coprimePairs, CoprimePair{m: coprimePairs[0].m + 2*coprimePairs[0].n, n: coprimePairs[0].n})
			nextPair <- coprimePairs[0]
			coprimePairs = coprimePairs[1:]
		}
	}()
	return nextPair
}
