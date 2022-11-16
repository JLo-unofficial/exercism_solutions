package pythagorean

import "sort"

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
	triplets := map[int]Triplet{}
	count := 0
	for pair := range generateCoprimePairs() {
		if count > 39 {
			break
		}
		if pair.m%2+pair.n%2 != 2 {
			continue
		}
		a = pair.m * pair.n
		b = (pair.m*pair.m - pair.n*pair.n) / 2
		c = (pair.m*pair.m + pair.n*pair.n) / 2
		if a > b {
			a, b = b, a
		}

		n = a + b + c
		if sum%n == 0 {
			k = sum / n
			triplets[k*a] = Triplet{a: k * a, b: k * b, c: k * c}
		}
		count++
	}
	keys := make([]int, len(triplets))
	result := make([]Triplet, len(triplets))
	keyIndex := 0
	for k := range triplets {
		keys[keyIndex] = k
		keyIndex++
	}
	sort.Ints(keys)
	for idx, k := range keys {
		result[idx] = triplets[k]
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
