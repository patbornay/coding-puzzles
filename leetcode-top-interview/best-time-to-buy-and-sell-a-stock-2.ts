function maxProfit(prices: number[]): number {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;    
};

// optimised solution
function maxProfit(prices: number[]): number {
    let totalProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { 
            totalProfit += prices[i] - prices[i - 1];
        }
    }
    return totalProfit;
}

// todo add explaination