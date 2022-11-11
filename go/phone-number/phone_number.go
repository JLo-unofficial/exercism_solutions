package phonenumber

import (
	"errors"
	"fmt"
	"strings"
)

var (
	zero byte = "0"[0]
	one  byte = "1"[0]
	nine byte = "9"[0]
)

func Number(phoneNumber string) (string, error) {
	var numbersOnly strings.Builder
	for i := 0; i < len(phoneNumber); i++ {
		if phoneNumber[i] >= zero && phoneNumber[i] <= nine {
			numbersOnly.WriteByte(phoneNumber[i])
		}
	}
	cleanedNumber := numbersOnly.String()

	// Remove leading country code if present
	if len(cleanedNumber) == 11 && strings.HasPrefix(cleanedNumber, "1") {
		cleanedNumber = cleanedNumber[1:]
	}

	// Only numbers of length 10 are valid
	if len(cleanedNumber) != 10 {
		return "", errors.New("invalid number of digits")
	}

	// Invalidate numbers with a 0 or 1 in area code
	if cleanedNumber[0] == zero || cleanedNumber[0] == one {
		return "", errors.New("area code cannot start with zero or one")
	}
	// Invalidate numbers with a 0 or 1 in exchange code
	if cleanedNumber[3] == zero || cleanedNumber[3] == one {
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
