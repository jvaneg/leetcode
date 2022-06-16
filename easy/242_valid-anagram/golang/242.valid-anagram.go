/*
 * @lc app=leetcode id=242 lang=golang
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (61.67%)
 * Likes:    5180
 * Dislikes: 220
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */
package main

import "fmt"

// @lc code=start
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMap := make(map[rune]int)

	for _, char := range s {
		sMap[char] += 1
	}

	for _, char := range t {
		charCount := sMap[char]

		if charCount == 0 {
			return false
		}
		if charCount == 1 {
			delete(sMap, char)
			continue
		}
		sMap[char] -= 1
	}

	if len(sMap) != 0 {
		return false
	}

	return true
}

// @lc code=end

func main() {
	result := isAnagram("anagram", "nagaram")
	fmt.Println(result)
}
