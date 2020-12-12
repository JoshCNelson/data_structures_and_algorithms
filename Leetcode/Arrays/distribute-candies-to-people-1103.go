// Leetcode #1103: Distribute Candies to People

func distributeCandies(candies int, num_people int) []int {
	ret := make([]int, num_people)
	idx := 0

	for count := 1; candies > 0; count++ {
		if candies <= count {
			ret[idx] += candies
			candies = 0
		} else {
			ret[idx] += count
			candies -= count
		}

		if idx == num_people-1 {
			idx = 0
		} else {
			idx++
		}
	}

	return ret
}