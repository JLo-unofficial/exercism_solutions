package atbash

import "strings"

var (
	A    byte = "A"[0]
	Z    byte = "Z"[0]
	a    byte = "a"[0]
	z    byte = "z"[0]
	zero byte = "0"[0]
	nine byte = "9"[0]
)

func Atbash(s string) string {
	var encodedMessage strings.Builder
	var cipherText strings.Builder
	for i := 0; i < len(s); i++ {
		// Digits can be directly written to cipherText
		if s[i] >= zero && s[i] <= nine {
			cipherText.WriteByte(s[i])
		}

		// Convert uppercase letters to lowercase
		if s[i] >= A && s[i] <= Z {
			cipherText.WriteByte(plainToCipher(s[i] - (A - a)))
		}

		if s[i] >= a && s[i] <= z {
			cipherText.WriteByte(plainToCipher(s[i]))
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
func plainToCipher(char byte) byte {
	return z - (char - a)
}
