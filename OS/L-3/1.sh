#!/bin/bash

read -p "[]: Enter a string: " str

if [ -z "$str" ]; then
    echo "[]: String is empty"
    exit 1
fi

rev_str=$(echo "$str" | rev)

if [ "$str" == "$rev_str" ]; then
    echo "[]: Provided string '$str' is a palindrome"
else
    echo "[]: Provided string '$str' is not a palindrome"
fi

exit 0