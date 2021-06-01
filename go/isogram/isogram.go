/*
Package isogram is a simple package to determine if a word is an isogram
*/
package isogram

// LetterToIndex converts an alphabetic rune to its index, ignoring case
func LetterToIndex(letter rune) rune {
	// Lowercase letters are more common and can return an index earlier
	if letter >= 'a' && letter <= 'z' {
		return letter - 'a'
	}
	if letter >= 'A' && letter <= 'Z' {
		return letter - 'A'
	}

	// If the rune is non-alphabetic, return empty rune
	return ' '
}

// IsIsogram accepts any string and returns true if the string is an isogram
// and false otherwise without using regular expressions
func IsIsogram(word string) bool {
	visited := map[rune]bool{}
	for _, letter := range word {
		if letterIdx := LetterToIndex(letter); letterIdx != ' ' {
			// Idiomatic way to check for value in map
			if _, seenBefore := visited[letterIdx]; seenBefore {
				return false
			}
			visited[letterIdx] = true
		}
	}
	return true
}
