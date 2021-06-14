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
		digit := rune(candidate[i])
		if unicode.IsDigit(digit) {
			digitCount += 1
			doubleValue = !doubleValue // cycles between true and false
			if doubleValue {
				sum += luhnMap[digit]
			} else {
				sum += int(digit - '0')
			}
		} else if !unicode.IsSpace(digit) {
			// String is invalid
			return false
		}
	}

	return digitCount > 1 && sum%10 == 0
}
