/*
Given a connected, undirected weighted graph, find its Minimum Spanning Tree (MST) using Prim’s Algorithm.

Graph (Edges List Representation)
Vertices: 0, 1, 2, 3, 4

0 - 1 (2)
0 - 3 (6)
1 - 2 (3)
1 - 3 (8)
1 - 4 (5)
2 - 4 (7)
3 - 4 (9)

Objective:
Construct MST using Adjacency List
Print selected edges and total cost
*/

#include <stdio.h>
#include <limits.h>
#define V 5

int minKey(int key[], int visited[]) {
    int min = INT_MAX, minIndex;

    for (int i = 0; i < V; i++) {
        if (!visited[i] && key[i] < min) {
            min = key[i];
            minIndex = i;
        }
    }
    return minIndex;
}

int main() {
    int graph[V][V] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    int parent[V];
    int key[V];
    int visited[V];

    for (int i = 0; i < V; i++) {
        key[i] = INT_MAX;
        visited[i] = 0;
    }

    key[0] = 0;
    parent[0] = -1;

    for (int count = 0; count < V - 1; count++) {

        int u = minKey(key, visited);
        visited[u] = 1;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    int totalCost = 0;
    printf("Edge : Weight\n");

    for (int i = 1; i < V; i++) {
        printf("%d - %d : %d\n", parent[i], i, graph[i][parent[i]]);
        totalCost += graph[i][parent[i]];
    }

    printf("Total Cost: %d\n", totalCost);

    return 0;
}

/*
Edge : Weight
0 - 1 : 2
1 - 2 : 3
0 - 3 : 6
1 - 4 : 5

Total Cost: 16
*/