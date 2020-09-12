var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i < rowIndex + 1; i++) {
        var arr = [];
        arr[0] = arr[i]  = 1;
        for (var j = 1; j < i; j++) {
            arr[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(arr);
    }
    return result[rowIndex];
};