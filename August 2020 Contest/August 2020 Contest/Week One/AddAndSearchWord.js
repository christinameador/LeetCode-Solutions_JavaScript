var WordDictionary = function() {
    this.dictionary = {
        letter: '*',
        next: {}
    };
};

WordDictionary.prototype.addWord = function(word) {
    var root = this.dictionary;
    for (let i = 0; i < word.length; i += 1) {
        if (root.next[word[i]] === undefined) {
            root.next[word[i]] = { letter: word[i], next: {}}
        }
        root = root.next[word[i]];
    }
    root.end = true;
};

WordDictionary.prototype.search = function(word) {
    var index = 0;
    let root = this.dictionary;
    if (word[index] === '.') {
        const keys = Object.keys(root.next);
        for (let i = 0; i < keys.length; i += 1) {
            if (this.recursion(word,root.next[keys[i]], index + 1)) return true;
        }
        return false;
    } else {
        if (root.next[word[index]] === undefined) return false;
        else return this.recursion(word, root.next[word[index]], index + 1)
    }
    
};

WordDictionary.prototype.recursion = function(word, root, index) {
    if (index === word.length) {
        return !!root.end;
    }
    if (word[index] === '.') {
        const keys = Object.keys(root.next);
		// this for loop is to handle the all character using .
        for (let i = 0; i < keys.length; i += 1) {
            if (this.recursion(word,root.next[keys[i]], index + 1)) return true;
        }
        return false;
    } else {
        if (root.next[word[index]] === undefined) return false;
        else return this.recursion(word, root.next[word[index]], index + 1)
    }
};