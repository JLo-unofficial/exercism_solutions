package phonenumber

import (
	"errors"
	"fmt"
	"strings"
	"unicode"
)

func Number(phoneNumber string) (string, error) {
	var digits strings.Builder
	for _, digit := range phoneNumber {
		if unicode.IsDigit(digit) {
			digits.WriteRune(digit)
		}
	}
	phoneNumber = digits.String()

	// Remove leading country code if present
	if len(phoneNumber) == 11 && phoneNumber[0] == '1' {
		phoneNumber = phoneNumber[1:]
	}

	// Only numbers of length 10 are valid
	if len(phoneNumber) != 10 {
		return "", errors.New("invalid number of digits")
	}

	// Invalidate numbers with a 0 or 1 in area code
	if phoneNumber[0] == '0' || phoneNumber[0] == '1' {
		return "", errors.New("area code cannot start with zero or one")
	}
	// Invalidate numbers with a 0 or 1 in exchange code
	if phoneNumber[3] == '0' || phoneNumber[3] == '1' {
		return "", errors.New("exchange code cannot start with zero or one")
	}

	return phoneNumber, nil
}

func AreaCode(phoneNumber string) (string, error) {
	number, err := Number(phoneNumber)
	if err != nil {
		return "", err
	}
	return number[:3], nil
}

func Format(phoneNumber string) (string, error) {
	number, err := Number(phoneNumber)
	if err != nil {
		return "", err
	}
	formattedNumber := fmt.Sprintf("(%s) %s-%s", number[:3], number[3:6], number[6:])
	return formattedNumber, nil
}
