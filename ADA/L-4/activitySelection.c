/*
You are given 8 activities, each having:

Activity Name → A1, A2, A3, …
Start Time
Finish Time

| Activity | Start | Finish |
| -------- | ----- | ------ |
| A1       | 1     | 4      |
| A2       | 3     | 5      |
| A3       | 0     | 6      |
| A4       | 5     | 7      |
| A5       | 3     | 9      |
| A6       | 5     | 9      |
| A7       | 6     | 10     |
| A8       | 8     | 11     |

Objective:
Select the maximum number of non-overlapping activities.
*/

#include <stdio.h>
#include <string.h>
#define MAX 8

int main() {

    char activity[MAX][3] = {"A1","A2","A3","A4","A5","A6","A7","A8"};
    int start[MAX]  = {1,3,0,5,3,5,6,8};
    int finish[MAX] = {4,5,6,7,9,9,10,11};

    int n = 8;

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (finish[i] > finish[j]) {

                int temp = finish[i];
                finish[i] = finish[j];
                finish[j] = temp;

                temp = start[i];
                start[i] = start[j];
                start[j] = temp;

                char tempStr[3];
                strcpy(tempStr, activity[i]);
                strcpy(activity[i], activity[j]);
                strcpy(activity[j], tempStr);
            }
        }
    }

    printf("Selected Activities:\n");

    int i = 0;
    printf("%s ", activity[i]);

    for (int j = 1; j < n; j++) {
        if (start[j] >= finish[i]) {
            printf("%s ", activity[j]);
            i = j;
        }
    }

    return 0;
}

/*
Selected Activities:
A1 A4 A8 
*/