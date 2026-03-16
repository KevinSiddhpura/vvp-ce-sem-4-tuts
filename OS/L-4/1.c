#include<stdio.h>
#include<unistd.h>
#include<stdlib.h>

int main() {
    int forks;

    printf("[]: Number of child processes to create: ");
    scanf("%d", &forks);

    for(int i = 0; i < forks; i++) {
        pid_t pid = fork();

        if(pid < 0) {
            printf("\n[]: Child process not created");
            exit(1);
        } else if(pid == 0) {
            printf("\n[%d]: Child Process PID: %d | Parent Process PID: %d", i + 1, getpid(), getppid());
            exit(0);
        }
    }

    printf("\n");
    return 0;
}