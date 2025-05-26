class Solution:
    def longestPalindrome(self, s: str) -> str:
        palindrom_str = ""
        for i in range(len(s)):
            for j in range(len(s),i,-1):
                temp_str = s[i:j]
                if temp_str == temp_str[::-1]:
                    if len(palindrom_str) < len(temp_str):
                        palindrom_str = temp_str
        return palindrom_str