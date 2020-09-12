var maxProfit = function(prices) {
    var len = prices.length;
    if(len <= 1) return 0;
    var maxSoFar = [];
    maxSoFar.push(0);
    var lowest = prices[0];
    for(var i = 1; i < len; i++) {
        lowest = Math.min(prices[i], lowest);
        maxSoFar[i] = Math.max(maxSoFar[i-1], prices[i] - lowest);
    }
    var ret = 0;
    var peak = prices[len-1];
    var profit = 0;
    for(i = len-1; i >= 0; i--) {
        profit = peak - prices[i];
        peak = Math.max(prices[i], peak);
        ret = Math.max(ret, maxSoFar[i] + profit);
    }
    return ret;
};