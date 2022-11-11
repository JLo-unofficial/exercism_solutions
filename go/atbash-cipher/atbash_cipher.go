package atbash

import (
	"strings"
	"unicode"
)

func Atbash(s string) string {
	var encodedMessage strings.Builder
	var cipherText strings.Builder
	for _, char := range s {
		switch {

		// Digits can be directly written to cipherText
		case unicode.IsDigit(char):
			cipherText.WriteRune(char)

		case unicode.IsUpper(char):
			cipherText.WriteRune(plainToCipher(unicode.ToLower(char)))

		case unicode.IsLower(char):
			cipherText.WriteRune(plainToCipher(char))
		}

		// cipherText should only hold strings up to len 5
		if cipherText.Len() == 5 {
			encodedMessage.WriteString(cipherText.String())
			encodedMessage.WriteString(" ")
			cipherText.Reset()
		}
	}

	// Write cipherText of len < 4
	encodedMessage.WriteString(cipherText.String())

	// Trim trailing space from line 35
	return strings.Trim(encodedMessage.String(), " ")
}

// Helper function to encode plainText character to its corresponding cipherText
func plainToCipher(char rune) rune {
	return 'z' - (char - 'a')
}
