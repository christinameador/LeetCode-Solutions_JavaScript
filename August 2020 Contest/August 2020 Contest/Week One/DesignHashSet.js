var MyHashSet = function() {
    this.set = []
};

MyHashSet.prototype.add = function(key) {
    if(this.set.indexOf(key) === -1){
        this.set.push(key)
    } 
};

MyHashSet.prototype.remove = function(key) {
    const index = this.set.indexOf(key)
    if(index >= 0) {
        delete this.set[index]
    }
};

MyHashSet.prototype.contains = function(key) {
    return this.set.indexOf(key) >= 0
};