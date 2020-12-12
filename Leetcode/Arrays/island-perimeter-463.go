// Leetcode #463: Islang Perimeter

func islandPerimeter(grid [][]int) int {
	sides := 0

	for iRow, row := range grid {
		for iColumn := range row {
			square := grid[iRow][iColumn]
			if square == 1 {

				if iRow == 0 || grid[iRow-1][iColumn] == 0 { // up
					sides++
				}

				if iColumn == len(row)-1 || grid[iRow][iColumn+1] == 0 { // right
					sides++
				}

				if iRow == len(grid)-1 || grid[iRow+1][iColumn] == 0 { // down
					sides++
				}

				if iColumn == 0 || grid[iRow][iColumn-1] == 0 { // left
					sides++
				}
			}
		}
	}

	return sides
}