/*
Package twofer implements a simple library to practice string formatting
*/
package twofer

import "fmt"

// Return a string formatted with the name of a companion; if the
// name is empty, default to "you".
func ShareWith(name string) string {
	if len(name) == 0 {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
