/*
Package raindrops is a spin on the classic FizzBuzz problem
*/
package raindrops

import "strconv"

// Convert takes in an int n and either returns n as a string or
// returns a rain sound depending on its factors
func Convert(n int) string {
	result := ""
	if n%3 == 0 {
		result += "Pling"
	}
	if n%5 == 0 {
		result += "Plang"
	}
	if n%7 == 0 {
		result += "Plong"
	}
	if len(result) == 0 {
		result = strconv.FormatInt(int64(n), 10)
	}

	return result
}
