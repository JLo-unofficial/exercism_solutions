package proverb

import "fmt"

func Proverb(rhyme []string) []string {
	proverb := []string{}
	if len(rhyme) < 1 {
		return proverb
	}
	for i := 1; i < len(rhyme); i++ {
		line := fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i-1], rhyme[i])
		proverb = append(proverb, line)

	}
	finalLine := fmt.Sprintf("And all for the want of a %s.", rhyme[0])
	proverb = append(proverb, finalLine)
	return proverb

}
