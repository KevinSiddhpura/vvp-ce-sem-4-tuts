#!/bin/bash

read -p "[]: Enter a number: " num

if [ $num -le 0 ]; then
    echo "[]: Enter a positive number"
    exit 1
fi

flag=0

for((i=2; i<=num;i++)); do
    if [ $((num % i)) -eq 0 ]; then
        flag=$((flag + 1))
        break
    fi
done

if [ $flag -eq 0 ]; then
    echo "[]: Provided number $num is a prime number"
else
    echo "[]: Provided number $num is not a prime number"
fi

exit 0