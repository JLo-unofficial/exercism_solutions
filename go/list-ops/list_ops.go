package listops

type (
	UnaryFunc  func(int) int
	BinaryFunc func(int, int) int
	BoolFunc   func(int) bool
)

type IntList []int

func (list IntList) Reverse() IntList {
	result := make([]int, len(list))
	for i := 0; i < len(list); i++ {
		result[i] = list[len(list)-1-i]
	}
	return result
}

func (list IntList) Length() int {
	return len(list)
}

func (list IntList) Append(listB []int) IntList {
	result := make([]int, len(list)+len(listB))
	copy(result, list)

	for i := 0; i < len(listB); i++ {
		result[i+len(list)] = listB[i]
	}

	return result
}

func (list IntList) Map(fn UnaryFunc) IntList {
	result := make([]int, len(list))
	for i := 0; i < len(result); i++ {
		result[i] = fn(list[i])
	}
	return result
}

func (list IntList) Foldl(fn BinaryFunc, initial int) int {
	for i := 0; i < len(list); i++ {
		initial = fn(initial, list[i])
	}
	return initial
}

func (list IntList) Foldr(fn BinaryFunc, initial int) int {
	for i := len(list) - 1; i >= 0; i-- {
		initial = fn(list[i], initial)
	}
	return initial
}

func (list IntList) Filter(fn BoolFunc) IntList {
	result := make([]int, 0, len(list))
	for i := 0; i < len(list); i++ {
		if fn(list[i]) {
			result = append(result, list[i])
		}
	}
	return result
}

func (list IntList) Concat(lists []IntList) IntList {
	resultLength := len(list)
	for i := 0; i < len(lists); i++ {
		resultLength += len(lists[i])
	}
	result := make([]int, resultLength)
	copy(result, list)

	nextIdx := len(list)
	for i := 0; i < len(lists); i++ {
		for j := 0; j < len(lists[i]); j++ {
			result[nextIdx+j] = lists[i][j]
		}
		nextIdx += len(lists[i])
	}
	return result
}
