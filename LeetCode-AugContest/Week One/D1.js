var detectCapitalUse = function(word) {
    return [
        word => word.every(char => char <= 'Z' && char >= 'A'),
        word => word.every(char => char <= 'z' && char >= 'a'),
        word => {
            for (let i = 0; i < word.length; i++) {
                if (i === 0 && (word[i] > 'Z' || word[i] < 'A')) {
                    return false;
                }
                if (i !== 0 && (word[i] > 'z' || word[i] < 'a')) {
                    return false
                }
            }
            return true;
        }
    ].map(fn => fn(word.split(''))).some(result => result === true);
};