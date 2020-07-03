// Leetcode #1475: Final Prices with a Special Discount in a Shop

func finalPrices(prices []int) []int {
	i := 0
	j := 1

	for i < len(prices) {

		if j > len(prices)-1 {
			i++
			j = i + 1
			continue
		}

		if j > i && prices[j] <= prices[i] {
			prices[i] = prices[i] - prices[j]
			i++
			j = i + 1
		} else {
			j++
		}
	}

	return prices
}
