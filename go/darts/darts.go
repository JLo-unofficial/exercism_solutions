package darts

import "math"

const (
	innerRadius  = 1.0
	middleRadius = 5.0
	outerRadius  = 10.0
)

func Score(x, y float64) int {
	distanceFromCenter := math.Sqrt(math.Pow(x, 2) + math.Pow(y, 2))
	switch {
	case distanceFromCenter <= innerRadius:
		return 10
	case distanceFromCenter <= middleRadius:
		return 5
	case distanceFromCenter <= outerRadius:
		return 1
	default:
		return 0
	}
}
