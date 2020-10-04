// Leetcode #1304: Find N Unique Integers Sum up to Zero

func sumZero(n int) []int {
	ret := make([]int, n)
	idx := 0

	for uniqueInt := 1; uniqueInt < (n/2)+1; uniqueInt++ {
		ret[idx], ret[idx+1] = uniqueInt, -uniqueInt
		idx += 2
	}

	return ret
}