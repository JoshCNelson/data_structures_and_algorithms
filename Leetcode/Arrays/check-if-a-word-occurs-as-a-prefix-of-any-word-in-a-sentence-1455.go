// Leetcode #1455: Check If a Word Occurs As a Prefix of Any Word in a Sentence

import "strings"

func isPrefixOfWord(sentence string, searchWord string) int {
	for idx, word := range strings.Split(sentence, " ") {
		if len(word) >= len(searchWord) && searchWord == word[:len(searchWord)] {
			return idx + 1
		}
	}

	return -1
}