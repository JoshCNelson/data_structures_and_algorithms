// Leetcode #1518: Water Bottles

func numWaterBottles(numBottles int, numExchange int) int {
	count := 0
	emptyLeftover := 0

	for numBottles >= numExchange {
		count += numBottles
		emptyLeftover += numBottles % numExchange
		numBottles = numBottles / numExchange
		if emptyLeftover >= numExchange {
			numBottles++
			emptyLeftover -= numExchange
		}
	}

	return count + numBottles + ((numBottles + emptyLeftover) / numExchange)
}