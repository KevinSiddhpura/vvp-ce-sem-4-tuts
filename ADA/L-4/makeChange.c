/*
You are given an amount ₹N.
Return the minimum number of coins required to make that amount.

Available coin denominations:
₹10, ₹5, ₹2, ₹1

Objective:
Use a greedy approach to minimize the number of coins.
*/

#include <stdio.h>

int main() {
    int amount;

    int coins[] = {10, 5, 2, 1};
    int count[4] = {0};
    int n = 4;

    printf("Enter amount: ");
    scanf("%d", &amount);

    printf("\nCoins used:\n");

    for (int i = 0; i < n; i++) {
        if (amount >= coins[i]) {
            count[i] = amount / coins[i];
            amount = amount % coins[i];
        }
    }

    for (int i = 0; i < n; i++) {
        printf("%d : %d\n", coins[i], count[i]);
    }

    return 0;
}

/*
Enter amount: 12

Coins used:
10 : 1
5 : 0
2 : 1
1 : 0
*/