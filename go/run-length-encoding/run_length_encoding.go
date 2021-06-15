package encode

import (
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

func GenerateCompressedString(count int, char rune) string {
	if count > 1 {
		return fmt.Sprintf("%d%c", count, char)
	}
	return string(char)
}

func RunLengthEncode(uncompressed string) string {
	prevChar := ' ' - 1
	charCount := 0

	// Build result string
	result := ""
	for _, curChar := range uncompressed {
		if curChar == prevChar {
			charCount++
			continue
		}
		// characters differ
		result += GenerateCompressedString(charCount, prevChar)
		prevChar = curChar
		charCount = 1
	}
	result += GenerateCompressedString(charCount, prevChar)
	return result[1:]
}

func RunLengthDecode(compressed string) string {
	result := ""
	charCount := []rune{}
	for _, letter := range compressed {
		if unicode.IsDigit(letter) {
			charCount = append(charCount, letter)
			continue
		}
		// Letters only
		repeated, err := strconv.ParseInt(string(charCount), 10, 32)
		if err != nil {
			result += string(letter)
		} else {
			result += strings.Repeat(string(letter), int(repeated))
		}
		charCount = []rune{}
	}
	return result
}
