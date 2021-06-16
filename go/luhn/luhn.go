// Package luhn is a simple implementation of the Luhn algorithm
package luhn

import (
	"strings"
	"unicode"
)

// luhnMap provides a quick lookup for every other digit
var luhnMap = map[rune]rune{
	'0': '0',
	'1': '2',
	'2': '4',
	'3': '6',
	'4': '8',
	'5': '1',
	'6': '3',
	'7': '5',
	'8': '7',
	'9': '9',
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
		// cycles between true and false
		if doubleValue = !doubleValue; doubleValue {
			char = luhnMap[char]
		}

		sum += int(char - '0')
	}

	return len(candidate) > 1 && sum%10 == 0
}
