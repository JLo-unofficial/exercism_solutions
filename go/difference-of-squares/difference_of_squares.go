package diffsquares

import "math"

func SumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6
}

func SquareOfSum(n int) int {
	summation := float64(n * (n + 1) / 2)
	return int(math.Pow(summation, 2))
}

func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
