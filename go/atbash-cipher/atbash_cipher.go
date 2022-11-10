package atbash

import "unicode"

func Atbash(s string) string {
	encoded := encode(&s)
	return string(encoded)
}

func encode(s *string) []rune {
	result := make([]rune, 1, len(*s))
	for _, char := range *s {
		if unicode.IsDigit(char) {
			result = append(result, char)
		}
		if !unicode.IsLetter(char) {
			continue
		}
		if unicode.IsUpper(char) {
			result = append(result, plainToCipher(unicode.ToLower(char)))
		} else {
			result = append(result, plainToCipher(char))
		}
	}
	return result
}

func plainToCipher(char rune) rune {
	return 'z' - (char - 'a')
}
