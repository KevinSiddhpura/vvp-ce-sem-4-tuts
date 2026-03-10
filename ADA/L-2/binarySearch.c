#include<stdio.h>

int main() {
    int n;

    printf("[]: Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("[]: Enter the elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int toFind;

    printf("[]: Enter the element to search: ");
    scanf("%d", &toFind);
    
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == toFind) {
            printf("[]: Element found at index %d\n", mid);
            return 0;
        }
        else if (arr[mid] < toFind) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    printf("[]: Element not found\n");
    return 0;
}