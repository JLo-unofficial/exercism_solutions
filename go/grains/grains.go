package grains

import "errors"

func Square(squareIdx int) (uint64, error) {
	if squareIdx < 1 || squareIdx > 64 {
		return 0, errors.New("Bitshifts must be in range [1,64] for a uint64")
	}
	return uint64(1 << (squareIdx - 1)), nil
}

func Total() uint64 {
	var total uint64 = 0
	for i := 1; i <= 64; i++ {
		val, _ := Square(i)
		total += val
	}
	return total
}
