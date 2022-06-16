/*
 * @lc app=leetcode id=242 lang=typescript
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

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) {
    return false;
  }

  const sMap: Map<string, number> = new Map();

  for (const char of s) {
    const charCount = sMap.get(char);
    charCount !== undefined ? sMap.set(char, charCount + 1) : sMap.set(char, 1);
  }

  for (const char of t) {
    const charCount = sMap.get(char);
    if (charCount === undefined) {
      return false;
    }
    if (charCount === 1) {
      sMap.delete(char);
      continue;
    }
    sMap.set(char, charCount - 1);
  }

  if(sMap.size) {
    return false;
  }

  return true;
};
// @lc code=end

const result = isAnagram("anagram", "nagaram");
console.log(result);
