function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
};

// optimised approach
function maxProfit(prices: number[]): number {
    let price = prices[0]
    let profit = 0
    for (let i=0; i<prices.length; i++) {
        if (prices[i] < price) {
            price = prices[i]
        }

        profit = Math.max(profit, prices[i] - price)
    }

    return profit
};

// add explaination