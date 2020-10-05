// Leetcode #1502: Can Make Arithmetic Progression From Sequence

import "sort"

func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	var progression int
	var lastVal int

	for idx, num := range arr {
		if idx == 0 {
			lastVal = num
			continue
		}

		val := num - lastVal

		if progression == 0 {
			progression = val
			lastVal = num
			continue
		}

		if val != progression {
			return false
		}

		lastVal = num
	}

	return true
}