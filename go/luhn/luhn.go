// Package luhn is a simple implementation of the Luhn algorithm
package luhn

import (
	"strings"
	"unicode"
)

// Double accepts an integer and applies the Luhn transformational
// step
func Double(digit int) int {
	digit = digit * 2
	if digit > 9 {
		digit -= 9
	}
	return digit
}

// Valid accepts a candidate string and determines whether the string is valid
func Valid(candidate string) bool {

	candidate = strings.ReplaceAll(candidate, " ", "")
	doubleValue := len(candidate)%2 == 1
	sum := 0
	// Iterate backwards over candidate string stripped of spaces
	for _, char := range candidate {
		// candidate is invalid if it contains a non-digit rune
		if !unicode.IsDigit(char) {
			return false
		}
		digit := int(char - '0')

		// cycles between true and false
		doubleValue = !doubleValue
		if doubleValue {
			digit = Double(digit)
		}

		sum += digit
	}

	return len(candidate) > 1 && sum%10 == 0
}
