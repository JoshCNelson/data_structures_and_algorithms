func numIdenticalPairs(nums []int) int {
	seen := make(map[int]int)
	goodPairs := 0

	for _, num := range nums {

		if _, ok := seen[num]; ok {
			seen[num]++
		} else {
			seen[num] = 1
		}
	}

	for _, v := range seen {
		goodPairs += (v * (v - 1) / 2)
	}

	return goodPairs
}