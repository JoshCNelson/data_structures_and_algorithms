// Leetcode #1374: Generate a String with Characters that Have Odd Counts

func generateTheString(n int) string {
	ret := ""

	for i := 0; i < n-1; i++ {
		ret += "a"
	}

	if n%2 == 1 {
		ret += "a"
	} else {
		ret += "b"
	}

	return ret
}