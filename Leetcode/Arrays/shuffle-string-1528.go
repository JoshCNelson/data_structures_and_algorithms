// Leetcode #1528: Shuffle String

func restoreString(s string, indices []int) string {
	l := len(s)
	ret := make([]byte, l)

	for i, idx := range indices {
		ret[idx] = s[i]
	}

	return string(ret)
}