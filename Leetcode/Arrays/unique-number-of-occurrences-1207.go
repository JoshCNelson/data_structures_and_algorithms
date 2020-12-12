// Leetcode #1207: Unique Number of Occurrences

func uniqueOccurrences(arr []int) bool {
	occurrences := make(map[int]int)

	for _, num := range arr {
		if _, ok := occurrences[num]; ok {
			occurrences[num]++
		} else {
			occurrences[num] = 1
		}
	}

	unique := make(map[int]bool, len(occurrences))

	for _, val := range occurrences {
		if _, ok := unique[val]; ok {
			return false
		} else {
			unique[val] = true
		}
	}

	return true
}