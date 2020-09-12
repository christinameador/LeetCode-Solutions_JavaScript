var titleToNumber = function(s) {
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        r = r * 26 + (s[i].charCodeAt(0) - 65 + 1);
    }
    return r;
};