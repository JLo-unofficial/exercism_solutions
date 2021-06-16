// Package grains implements a simple doubling game played on a chessboard
package grains

import "errors"

// Square accepts a valid chessboard square index and returns the number of grains
// found on that square
func Square(squareIdx int) (uint64, error) {
	if squareIdx < 1 || squareIdx > 64 {
		return 0, errors.New("Bitshifts must be in range [1,64] for a uint64")
	}

	return uint64(1 << (squareIdx - 1)), nil
}

// Total returns the number of grains on the entire chessboard
func Total() uint64 {
	return ^uint64(0)
}
