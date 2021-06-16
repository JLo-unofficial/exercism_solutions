// Package luhn is a simple implementation of the Luhn algorithm
package luhn

import "unicode"

// luhnMap provides a quick lookup for every other digit
var luhnMap = map[rune]int{
	'0': 0,
	'1': 2,
	'2': 4,
	'3': 6,
	'4': 8,
	'5': 1,
	'6': 3,
	'7': 5,
	'8': 7,
	'9': 9,
}

// Valid accepts a candidate string and determines whether the string is valid
func Valid(candidate string) bool {

	doubleValue := true
	digitCount := 0
	sum := 0
	// Iterate backwards over candidate string
	for i := len(candidate) - 1; i >= 0; i-- {
		char := rune(candidate[i])

		// Candidate is invalid if it contains a letter or punctuation
		if unicode.IsLetter(char) || unicode.IsPunct(char) {
			return false
		}

		// Ignore char if not a digit
		if !unicode.IsDigit(char) {
			continue
		}

		digitCount ++
		doubleValue = !doubleValue // cycles between true and false
		if doubleValue {
			sum += luhnMap[char]
		} else {
			sum += int(char - '0')
		}
	}

	return digitCount > 1 && sum%10 == 0
}
