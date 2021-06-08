/*
* Package luhn is a simple implementation of the Luhn algorithm
 */
package luhn

import (
	"errors"
	"unicode"
)

// luhn_map provides a quick lookup for every other digit
var luhn_map = map[int]int{
	0: 0,
	1: 2,
	2: 4,
	3: 6,
	4: 8,
	5: 1,
	6: 3,
	7: 5,
	8: 7,
	9: 9,
}

// Strip accepts a candidate and returns an int array if the candidate is properly formatted
func Strip(candidate string) ([]int, error) {
	result := make([]int, 0, len(candidate))
	for _, digit := range candidate {
		if unicode.IsDigit(digit) {
			result = append(result, int(digit-'0'))
		} else if !unicode.IsSpace(digit) {
			return make([]int, 0, 0), errors.New("Number contains invalid characters")
		}
	}
	if len(result) < 2 {
		return nil, errors.New("Single digit numbers are invalid")
	}
	return result, nil
}

// Valid accepts a candidate string and determines whether the string is valid
func Valid(candidate string) bool {
	formatted_numbers, err := Strip(candidate)
	if err != nil {
		return false
	}

	double_value := true
	sum := 0
	for i := len(formatted_numbers) - 1; i >= 0; i-- {
		double_value = double_value == false // cycles between true and false
		digit := formatted_numbers[i]
		if double_value {
			sum += luhn_map[digit]
		} else {
			sum += digit
		}
	}

	return sum%10 == 0
}
