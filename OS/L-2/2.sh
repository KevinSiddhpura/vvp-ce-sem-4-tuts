#!/bin/bash

read -p "[]: Enter a number: " num

if [ $num -le 0 ]; then
    echo "[]: Enter a positive number"
    exit 1
fi

sum=0
fact=1

for ((i=1; i<=num; i++)); do
    sum=$((sum + i))
    fact=$((fact * i))
done

echo "[]: Sum of first $num natural numbers: $sum"
echo "[]: Factorial of $num: $fact"

exit 0