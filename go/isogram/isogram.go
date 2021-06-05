/*
Package isogram is a simple package to determine if a word is an isogram
*/
package isogram

import "unicode"

// IsIsogram accepts any string and returns true if the string is an isogram
// and false otherwise without using regular expressions
func IsIsogram(word string) bool {
	visited := map[rune]bool{}
	for _, letter := range word {
		if unicode.IsLetter(letter) {
			lowercase := unicode.ToLower(letter)
			// Idiomatic way to check for value in map
			if _, seenBefore := visited[lowercase]; seenBefore {
				return false
			}
			visited[lowercase] = true
		}
	}
	return true
}
