// Leetcode #1470: Shuffle The Array

func shuffle(nums []int, n int) []int {
	var ret []int

	for i := range nums[:n] {
		ret = append(ret, nums[i], nums[n+i])
	}

	return ret
}