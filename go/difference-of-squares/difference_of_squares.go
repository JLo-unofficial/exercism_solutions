// Package diffsquares implements a simple library to calculate sum of squares and the square of
// summation
package diffsquares

// The commented code below produced a worse benchmark than simply multiplying
// the local summation value by itself
// import "math"
/* func SquareOfSum(n int) int {
	summation := float64(n * (n + 1) / 2)
	return int(math.Pow(summation, 2))
} */

// SquareOfSums accepts an int n and returns the squared value of the summation
// from 1 to n
func SquareOfSum(n int) int {
	summation := (n * (n + 1) / 2)
	return summation * summation
}

// SumOfSquares accepts an int n and returns the summation of all squares
// from 1 to n using the succinct formula
func SumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6
}

// Difference accepts an int n and returns the difference between the
// SquareOfSums and the SumOfSquares
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
