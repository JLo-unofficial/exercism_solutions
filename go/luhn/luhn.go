// Package luhn is a simple implementation of the Luhn algorithm
package luhn

import (
	"strings"
	"unicode"
)

// luhnMap provides a quick lookup for every other digit
func LuhnOperation(digit int) int {
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
		if !unicode.IsDigit(char) {
			// candidate is invalid if it contains a non-digit rune
			return false
		}
		digit := int(char - '0')
		// cycles between true and false
		if doubleValue = !doubleValue; doubleValue {
			digit = LuhnOperation(digit)
		}

		sum += digit
	}

	return len(candidate) > 1 && sum%10 == 0
}
