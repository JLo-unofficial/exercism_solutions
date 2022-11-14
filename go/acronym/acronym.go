package acronym

import (
	"regexp"
	"strings"
	"unicode"
)

func Abbreviate(s string) string {
	result := strings.Builder{}
	wordSplitPattern := regexp.MustCompile(`[\_\-\s]+`)
	for _, word := range wordSplitPattern.Split(s, -1) {
		result.WriteRune(unicode.ToUpper(rune(word[0])))
	}
	return result.String()
}
