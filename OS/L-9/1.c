#include <stdio.h>
#include <dirent.h>

int main()
{
    DIR *d;
    struct dirent *dir;

    d = opendir(".");
    if (d == NULL)
    {
        printf("Unable to open current directory\n");
        return 1;
    }

    while ((dir = readdir(d)) != NULL)
    {
        if (dir->d_name[0] == '.')
            continue;
        printf("%s\n", dir->d_name);
    }

    closedir(d);
    return 0;
}