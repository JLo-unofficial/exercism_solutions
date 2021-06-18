// Package luhn is a simple implementation of the Luhn algorithm
package luhn

import (
	"strings"
	"unicode"
)

// Valid accepts a candidate string and determines whether the string is valid
func Valid(candidate string) bool {

	candidate = strings.ReplaceAll(candidate, " ", "")

	if len(candidate) <= 1 {
		return false
	}

	doubleValue := len(candidate)%2 == 0
	sum := 0

	// Iterate backwards over candidate string stripped of spaces
	for _, char := range candidate {
		// candidate is invalid if it contains a non-digit rune
		if !unicode.IsDigit(char) {
			return false
		}

		digit := int(char - '0')

		// apply luhn transformation to digit
		if doubleValue {
			digit *= 2
			if digit > 9 {
				digit -= 9
			}
		}

		sum += digit

		// cycles between true and false
		doubleValue = !doubleValue
	}

	return sum%10 == 0
}
