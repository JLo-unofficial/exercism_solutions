/*
Package isogram is a simple package to determine if a word is an isogram
*/
package isogram

import (
	"regexp"
	"unicode"
)

// Handy pattern to match all non-alphanumeric characters
var nonAlphaNumeric, err = regexp.Compile(`\W`)

// IsIsogram accepts any string and returns true if the string is an isogram
// and false otherwise
func IsIsogram(word string) bool {
	visited := map[rune]int{}
	for _, letter := range nonAlphaNumeric.ReplaceAllString(word, "") {
		_, seenBefore := visited[unicode.ToUpper(letter)]
		if seenBefore {
			return false
		}
		visited[unicode.ToUpper(letter)] = 1
	}
	return true
}
