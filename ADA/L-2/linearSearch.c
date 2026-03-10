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

    for (int i = 0; i < n; i++) {
        if (arr[i] == toFind) {
            printf("[]: Element found at index %d\n", i);
            return 0;
        }
    }
    
    printf("[]: Element not found\n");
    return 0;
}