package binarysearch

func SearchInts(list []int, key int) int {
	low := 0
	high := len(list) - 1
	var mid int

	for ; low <= high; mid = (low + high) / 2 {

		if list[mid] == key {
			return mid
		}

		if list[mid] > key {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}
