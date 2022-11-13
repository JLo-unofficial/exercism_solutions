package atbash

import (
	"strings"
	"unicode"
)

func Atbash(s string) string {
	var cipherText strings.Builder
	for _, char := range s {
		// cipherText should have words of length 5 separated by spaces
		if cipherText.Len()%6 == 5 {
			cipherText.WriteRune(' ')
		}

		switch {

		// Digits can be directly written to cipherText
		case unicode.IsDigit(char):
			cipherText.WriteRune(char)

		case unicode.IsLetter(char):
			cipherText.WriteRune(plainToCipher(char))
		}

	}

	return strings.Trim(cipherText.String(), " ")
}

// Helper function to encode plainText character to its corresponding cipherText
func plainToCipher(char rune) rune {
	return 'z' - (unicode.ToLower(char) - 'a')
}
