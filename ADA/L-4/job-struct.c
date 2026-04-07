/*
A company has the following 7 jobs, each taking 1 unit time.

Each job has:
Job Name (Index) → J1, J2, J3, …
Deadline
Profit

| Job | Deadline | Profit |
| --- | -------- | ------ |
| J1  | 2        | 100    |
| J2  | 1        | 19     |
| J3  | 2        | 27     |
| J4  | 1        | 25     |
| J5  | 3        | 15     |
| J6  | 2        | 30     |
| J7  | 1        | 10     |
*/

#include <stdio.h>
#define MAX 7

struct Job {
    char id[3];
    int deadline;
    int profit;
};

int main() {

    struct Job jobs[MAX] = {
        {"J1", 2, 100},
        {"J2", 1, 19},
        {"J3", 2, 27},
        {"J4", 1, 25},
        {"J5", 3, 15},
        {"J6", 2, 30},
        {"J7", 1, 10}
    };

    int n = 7;

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (jobs[i].profit < jobs[j].profit) {
                struct Job temp = jobs[i];
                jobs[i] = jobs[j];
                jobs[j] = temp;
            }
        }
    }

    int maxDeadline = 0;
    for (int i = 0; i < n; i++) {
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    }

    int slot[MAX] = {0};
    char result[MAX][3];
    int totalProfit = 0;

    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline - 1; j >= 0; j--) {
            if (slot[j] == 0) {
                slot[j] = 1;
                sprintf(result[j], "%s", jobs[i].id);
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }

    printf("Selected Jobs Sequence:\n");
    for (int i = 0; i < maxDeadline; i++) {
        if (slot[i])
            printf("%s ", result[i]);
    }

    printf("\nTotal Profit: %d\n", totalProfit);

    return 0;
}

/*
Selected Jobs Sequence:
J6 J1 J5 
Total Profit: 145
*/