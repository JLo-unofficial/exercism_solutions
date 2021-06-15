package summultiples

func SumMultiples(limit int, divisors ...int) int {
	sum := 0
	visited := map[int]bool{}
	for _, divisor := range divisors {
		if divisor > 0 {
			for i := 0; i < limit; i += divisor {
				if _, ok := visited[i]; !ok {
					visited[i] = true
					sum += i
				}
			}
		}
	}
	return sum
}
