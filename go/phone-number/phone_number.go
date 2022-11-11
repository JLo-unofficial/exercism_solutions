package phonenumber

import (
	"errors"
	"fmt"
	"regexp"
	"strings"
)

func hasValidAreaCode(phoneNumber string) bool {
	return !strings.HasPrefix(phoneNumber, "0") && !strings.HasPrefix(phoneNumber, "1")
}

func hasValidExchangeCode(phoneNumber string) bool {
	validExchangeCodePattern, err := regexp.Compile(`^\d{3}[^01]`)
	if err != nil {
		return false
	}
	return validExchangeCodePattern.MatchString(phoneNumber)
}

func Number(phoneNumber string) (string, error) {
	numberPattern, err := regexp.Compile(`[^0-9]`)
	if err != nil {
		return "", err
	}
	cleanedNumber := numberPattern.ReplaceAllString(phoneNumber, "")

	if len(cleanedNumber) == 11 && strings.HasPrefix(cleanedNumber, "1") {
		cleanedNumber = cleanedNumber[1:]
	}

	if len(cleanedNumber) != 10 {
		return "", errors.New("invalid number of digits")
	}

	if !hasValidAreaCode(cleanedNumber) {
		return "", errors.New("area code cannot start with zero or one")
	}
	if !hasValidExchangeCode(cleanedNumber) {
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
