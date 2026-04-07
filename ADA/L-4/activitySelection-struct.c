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

struct Activity {
    char id[3];
    int start;
    int finish;
};

int main() {

    struct Activity act[8] = {
        {"A1", 1, 4},
        {"A2", 3, 5},
        {"A3", 0, 6},
        {"A4", 5, 7},
        {"A5", 3, 9},
        {"A6", 5, 9},
        {"A7", 6, 10},
        {"A8", 8, 11}
    };

    int n = 8;

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (act[i].finish > act[j].finish) {
                struct Activity temp = act[i];
                act[i] = act[j];
                act[j] = temp;
            }
        }
    }

    printf("Selected Activities:\n");

    int i = 0;
    printf("%s ", act[i].id);

    for (int j = 1; j < n; j++) {
        if (act[j].start >= act[i].finish) {
            printf("%s ", act[j].id);
            i = j;
        }
    }

    return 0;
}

/*
Selected Activities:
A1 A4 A8 
*/