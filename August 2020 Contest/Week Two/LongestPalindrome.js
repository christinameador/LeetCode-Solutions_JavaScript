var longestPalindrome = function(s) {    
    let oddCount = 0;
    const m = new Map();
    
    for(const ch of s) {
        m.set(ch, (m.get(ch) || 0) ^ 1);                
        if (m.get(ch) & 1) oddCount++;
        else oddCount--;
    }
    
    return s.length - oddCount + (oddCount ? 1 : 0);
};