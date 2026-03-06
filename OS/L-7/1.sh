#!/bin/bash

if [ $# -eq 0 ]; then
    echo "[]: No arguments provided"
    exit 1
fi

echo "[]: Arguments provided: $@"

min=$1
max=$1
sum=0

for num in "$@"; do
    if [ $num -lt $min ]; then
        min=$num
    fi

    if [ $num -gt $max ]; then
        max=$num
    fi

    sum=$((sum + num))
done

avg=$(( sum / $# ))

echo "[]: Min: $min"
echo "[]: Max: $max"
echo "[]: Average: $avg"

exit 0

