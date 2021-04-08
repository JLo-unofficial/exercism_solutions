package darts

import "math"

func Score(x, y float64) int {
	distanceFromCenter := math.Sqrt(math.Pow(x, 2) + math.Pow(y, 2))
	points := 0
	if distanceFromCenter <= 10.0 {
		points = 1
		if distanceFromCenter <= 5.0 {
			points = 5
			if distanceFromCenter <= 1.0 {
				points = 10
			}
		}
	}
	return points
}
