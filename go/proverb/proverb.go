package proverb

import "fmt"

const (
	line  = "For want of a %s the %s was lost."
	final = "And all for the want of a %s."
)

func Proverb(rhyme []string) []string {
	if len(rhyme) < 1 {
		return []string{}
	}

	proverb := make([]string, len(rhyme))
	for i := 0; i < len(rhyme)-1; i++ {
		proverb[i] = fmt.Sprintf(line, rhyme[i], rhyme[i+1])
	}
	proverb[len(rhyme)-1] = fmt.Sprintf(final, rhyme[0])
	return proverb

}
