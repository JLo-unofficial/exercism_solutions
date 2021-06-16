package reverse

func Reverse(word string) string {
	reversed := make([]rune, len(word))
	for idx, char := range word {
		reversed[len(word)-(1+idx)] = char
	}
	return string(reversed)
}
