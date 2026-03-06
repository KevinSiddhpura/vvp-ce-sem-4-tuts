#!/bin/bash

if [ $# -eq 0 ]; then
    echo "[]: No arguments provided"
    exit 1
fi

echo "[]: Arguments provided: $@"

arr=("$@")
n=${#arr[@]}

for (( i = 0; i < n - 1; i++ )); do
    for (( j = 0; j < n - i - 1; j++ )); do
        if (( arr[j] < arr[j+1] )); then
            temp=${arr[j]}
            arr[j]=${arr[j+1]}
            arr[j+1]=$temp
        fi
    done
done

echo "[]: Sorted in descending order: ${arr[@]}"

exit 0