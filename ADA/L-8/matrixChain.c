#include <stdio.h>
#include <limits.h>

int matrixChain(int a[], int n) {
    int minmul[n][n];
    int i, j, k, l, q;

    for (i = 0; i < n; i++) {
        minmul[i][i] = 0;
    }

    for (l = 2; l < n; l++) {
        for (i = 1; i < n - l + 1; i++) {
            j = i + l - 1;
            
            minmul[i][j] = INT_MAX;
            
            for (k = i; k <= j - 1; k++) {
                q = minmul[i][k] + minmul[k + 1][j] + a[i - 1] * a[k] * a[j];
                
                if (q < minmul[i][j]) {
                    minmul[i][j] = q;
                }
            }
        }
    }
    
    return minmul[1][n - 1];
}

int main() {
    int arr[] = {13, 5, 89, 3, 34};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    printf("Minimum number of multiplications is %d\n", matrixChain(arr, size));
    
    return 0;
}
