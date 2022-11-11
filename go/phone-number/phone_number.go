package phonenumber

import (
	"errors"
	"fmt"
	"strings"
	"unicode"
)

func Number(phoneNumber string) (string, error) {
	var numbersOnly strings.Builder

	for _, digit := range phoneNumber {
		if !unicode.IsDigit(digit) {
			continue
		}
		numbersOnly.WriteRune(digit)
	}

	cleanedNumber := numbersOnly.String()

	if len(cleanedNumber) == 11 && strings.HasPrefix(cleanedNumber, "1") {
		cleanedNumber = cleanedNumber[1:]
	}

	if len(cleanedNumber) != 10 {
		return "", errors.New("invalid number of digits")
	}

	if strings.HasPrefix(cleanedNumber, "0") || strings.HasPrefix(phoneNumber, "1") {
		return "", errors.New("area code cannot start with zero or one")
	}
	if strings.HasPrefix(cleanedNumber[3:], "0") || strings.HasPrefix(cleanedNumber[3:], "1") {
		return "", errors.New("exchange code cannot start with zero or one")
	}

	return cleanedNumber, nil
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
