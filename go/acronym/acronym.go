package acronym

import (
	"strings"
	"unicode"
)

func abbrevSplit(char rune) bool {
	return char == ' ' || char == '_' || char == '-'
}

func Abbreviate(s string) string {
	result := strings.Builder{}
	for _, word := range strings.FieldsFunc(s, abbrevSplit) {
		result.WriteRune(unicode.ToUpper(rune(word[0])))
	}
	return result.String()
}
