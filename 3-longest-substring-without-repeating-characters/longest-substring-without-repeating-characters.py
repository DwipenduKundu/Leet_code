class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        temp_str=""
        long_len=0
        for string in s:
            if string not in temp_str:
                temp_str += string
                if long_len < len(temp_str):
                    long_len = len(temp_str)
            else:
                temp_str = temp_str[temp_str.index(string)+1:]
                temp_str += string
        return long_len