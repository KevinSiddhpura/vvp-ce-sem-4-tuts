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
#include <string.h>

#define MAX 7

int main() {

    char job[MAX][3] = {"J1","J2","J3","J4","J5","J6","J7"};
    int deadline[MAX] = {2,1,2,1,3,2,1};
    int profit[MAX]   = {100,19,27,25,15,30,10};

    int n = 7;

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (profit[i] < profit[j]) {
                int temp = profit[i];
                profit[i] = profit[j];
                profit[j] = temp;

                temp = deadline[i];
                deadline[i] = deadline[j];
                deadline[j] = temp;

                char tempStr[3];
                strcpy(tempStr, job[i]);
                strcpy(job[i], job[j]);
                strcpy(job[j], tempStr);
            }
        }
    }

    int maxDeadline = 0;
    for (int i = 0; i < n; i++) {
        if (deadline[i] > maxDeadline)
            maxDeadline = deadline[i];
    }

    int slot[MAX] = {0};
    char result[MAX][3];
    int totalProfit = 0;

    for (int i = 0; i < n; i++) {
        for (int j = deadline[i] - 1; j >= 0; j--) {
            if (slot[j] == 0) {
                slot[j] = 1;
                strcpy(result[j], job[i]);
                totalProfit += profit[i];
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