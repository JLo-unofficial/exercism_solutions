/*
Package hamming is a simple Hamming distance calculation package
*/
package hamming

import "errors"

// Distance accepts two DNA strings of equal length and returns their
// Hamming distance
// If the strings are not of equal length, Distance raises an error
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Lengths of strings do not match")
	}
	distance_count := 0
	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			distance_count++
		}
	}
	return distance_count, nil
}
