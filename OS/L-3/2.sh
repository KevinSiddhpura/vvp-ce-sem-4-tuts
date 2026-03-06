#!/bin/bash

read -p "[]: Enter a number: " num

if [ $num -le 0 ]; then
    echo "[]: Enter a positive number"
    exit 1
fi

sum=0

while [ $num -gt 0 ]; do
    d=$((num % 10))
    sum=$((sum + d))
    num=$((num / 10))
done

echo "[]: Sum of the entered digits is '$sum'"

exit 0