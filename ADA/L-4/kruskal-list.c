/*
Given a connected, undirected weighted graph, find its Minimum Spanning Tree (MST) using Kruskal’s Algorithm.

Graph (Edge List Representation)
Vertices: 0, 1, 2, 3, 4

| Edge | Weight |
| ---- | ------ |
| 0–1  | 2      |
| 0–3  | 6      |
| 1–2  | 3      |
| 1–3  | 8      |
| 1–4  | 5      |
| 2–4  | 7      |
| 3–4  | 9      |

Objective:
Construct MST using Kruskal’s Algorithm
Use Structure for edges
Use List (edge list) representation
Print selected edges and total cost
*/

#include <stdio.h>
#define V 5
#define E 7

struct Edge {
    int src, dest, weight;
};

int find(int parent[], int i) {
    while (parent[i] != i)
        i = parent[i];
    return i;
}

void unionSet(int parent[], int x, int y) {
    int xset = find(parent, x);
    int yset = find(parent, y);
    parent[xset] = yset;
}

int main() {

    struct Edge edges[E] = {
        {0,1,2},
        {0,3,6},
        {1,2,3},
        {1,3,8},
        {1,4,5},
        {2,4,7},
        {3,4,9}
    };

    for (int i = 0; i < E - 1; i++) {
        for (int j = i + 1; j < E; j++) {
            if (edges[i].weight > edges[j].weight) {
                struct Edge temp = edges[i];
                edges[i] = edges[j];
                edges[j] = temp;
            }
        }
    }

    int parent[V];
    for (int i = 0; i < V; i++)
        parent[i] = i;

    printf("Edge : Weight\n");

    int count = 0;
    int totalCost = 0;

    for (int i = 0; i < E && count < V - 1; i++) {

        int u = find(parent, edges[i].src);
        int v = find(parent, edges[i].dest);

        if (u != v) {
            printf("%d - %d : %d\n", edges[i].src, edges[i].dest, edges[i].weight);
            totalCost += edges[i].weight;
            unionSet(parent, u, v);
            count++;
        }
    }

    printf("Total Cost of MST: %d\n", totalCost);

    return 0;
}

/*
Edge : Weight
0 - 1 : 2
1 - 2 : 3
1 - 4 : 5
0 - 3 : 6

Total Cost of MST: 16
*/