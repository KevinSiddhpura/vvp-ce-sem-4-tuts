/*
Given a connected, undirected weighted graph represented using an adjacency matrix, find the Minimum Spanning Tree (MST) using Kruskal’s Algorithm.

Given Graph (Adjacency Matrix)
Vertices: 0, 1, 2, 3, 4

    0   1   2   3   4
0   0   2   0   6   0
1   2   0   3   8   5
2   0   3   0   0   7
3   6   8   0   0   9
4   0   5   7   9   0

Objective:
Convert matrix → edge list
Apply Kruskal’s Algorithm
Print MST edges and total cost
*/

#include <stdio.h>
#define V 5
#define MAX 20

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

    int graph[V][V] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    struct Edge edges[MAX];
    int edgeCount = 0;

    for (int i = 0; i < V; i++) {
        for (int j = i + 1; j < V; j++) {
            if (graph[i][j] != 0) {
                edges[edgeCount].src = i;
                edges[edgeCount].dest = j;
                edges[edgeCount].weight = graph[i][j];
                edgeCount++;
            }
        }
    }

    for (int i = 0; i < edgeCount - 1; i++) {
        for (int j = i + 1; j < edgeCount; j++) {
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

    int count = 0, totalCost = 0;

    for (int i = 0; i < edgeCount && count < V - 1; i++) {

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