/*
Problem Statement (0/1 Knapsack)
You are given N items, each with:

Item Name (Index) → I1, I2, I3, …
Weight
Profit (Value)
You also have a knapsack with capacity W.

Objective:
Select items such that:
Total weight ≤ W
Total profit is maximized
Each item can be taken only once (0 or 1)

| Item | Weight | Profit |
| ---- | ------ | ------ |
| I1   | 2      | 12     |
| I2   | 1      | 10     |
| I3   | 3      | 20     |
| I4   | 2      | 15     |
*/

#include <stdio.h>
#define MAX 10

struct Item {
    char id[3];
    int weight;
    int profit;
};

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    struct Item items[] = {
        {"I1", 2, 12},
        {"I2", 1, 10},
        {"I3", 3, 20},
        {"I4", 2, 15}
    };

    int n = 4;
    int W = 5;

    int dp[MAX][MAX] = {0};

    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (items[i-1].weight <= w) {
                dp[i][w] = max(
                    items[i-1].profit + dp[i-1][w - items[i-1].weight],
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }

    printf("Maximum Profit: %d\n", dp[n][W]);

    int w = W;
    printf("Selected Items:\n");

    for (int i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] != dp[i-1][w]) {
            printf("%s ", items[i-1].id);
            w -= items[i-1].weight;
        }
    }

    return 0;
}

/*
Maximum Profit: 37
Selected Items:
I4 I2 I1 
*/