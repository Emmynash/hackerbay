// Input is an array of Integers which denotes the stock value of company X.
// Ex: [1, 5, 6, 7, 34, 10]
// In this
// case :
// 1 is the stock value of company X on Day 0.
// 5 is the stock value of company X on Day 1.
// ...
// 10 is the stock value of a comany X on Day 5.

// You need to find the day where I can buy the stock and day where I can sell the stock to get the max profit:

//     In the above
// case, If I buy the stock at Day 0(i.e when the value is 1) and sell on Day 4(when the value is 34).I get the max profit.Profit = 34 - 1 = 33. So, the output
// for the above example should be[0, 4](i.e[buy - day, sell - day])

// If there is a test
// case inwhich any profit is not possible, Print[0, 0](i.e: you 're buying and selling the stock on the same day)

//     Test Cases:
//     [200, 1, 5, 6, 7, 34, 10]
//     [1, 5, 6, 7, 34, 10, 300]
//     [10, 1, 5, 6, 7, 34, 10, 20]
//     [2, 200, 1, 0, 10]
//     [7, 10]
//     [1] //Output: [0,0] You buy and sell on the same day because there's only one number.

//     If an emty array or null is passed as an input
//     return [-1, -1].

let Test1 = [200, 1, 5, 6, 7, 34, 10];
let Test2 = [1, 5, 6, 7, 34, 10, 300];
let Test3 = [10, 1, 5, 6, 7, 34, 10, 20];
let Test4 = [2, 200, 1, 0, 10];
let Test5 = [7, 10];
let Test6 = [1];


function stockAdvisor(stockPrices) {
    if (!stockPrices || !stockPrices.length) {
        return [-1, -1];
    }

    if (stockPrices.length === 1) {
        return [0, 0];
    }

    if (stockPrices.length === 2) {
        if (stockPrices[1] > stockPrices[0]) {
            return [0, 1];
        }

        return [1];
    }

    // Best-buy day is the day with the minimum price
    let minPrice = Math.min.apply(null, stockPrices);
    let bestSellDay = stockPrices.indexOf(minPrice);

    // Best-sell day can only occur after best-buy day
    let bestBuyDay = bestSellDay + 1;
    for (let i = bestSellDay + 1; i < stockPrices.length; i++) {
        if (stockPrices[i] > stockPrices[bestBuyDay]) {
            bestBuyDay = i;
        }
    }

    return [bestBuyDay, bestSellDay];
}

console.log(stockAdvisor(Test4));