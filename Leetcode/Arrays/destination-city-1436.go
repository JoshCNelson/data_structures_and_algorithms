// Leetcode #1436: Destination City

func destCity(paths [][]string) string {
	var dest string
	outgoing := make(map[string]bool)

	for _, path := range paths {
		outgoing[path[0]] = true
	}

	for _, path := range paths {
		if _, ok := outgoing[path[1]]; !ok {
			dest = path[1]
		}
	}

	return dest
}