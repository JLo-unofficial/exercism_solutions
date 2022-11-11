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
	var message strings.Builder
	var cipherText strings.Builder
	for i := 0; i < len(s); i++ {
		if s[i] >= zero && s[i] <= nine {
			cipherText.WriteByte(s[i])
		}
		if s[i] >= A && s[i] <= Z {
			cipherText.WriteByte(plainToCipher(s[i] - (A - a)))
		}
		if s[i] >= a && s[i] <= z {
			cipherText.WriteByte(plainToCipher(s[i]))
		}

		if cipherText.Len() == 5 {
			message.WriteString(cipherText.String())
			message.WriteString(" ")
			cipherText.Reset()
		}
	}
	message.WriteString(cipherText.String())
	return strings.Trim(message.String(), " ")
}

func plainToCipher(char byte) byte {
	return z - (char - a)
}
