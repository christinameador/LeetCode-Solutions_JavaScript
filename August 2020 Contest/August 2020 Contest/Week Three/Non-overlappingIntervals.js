var eraseOverlapIntervals = function(intervals) {
	// sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        const [prevS, prevE] = prev;
        const [currS, currE] = intervals[i];
        if(prevE <= currS) prev = intervals[i];
        else remove++;
    }
    return remove;
};