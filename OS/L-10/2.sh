#!/bin/bash

files=$(ls *.txt)

for file in $files; do
    new_name="${file%.txt}.doc"
    mv "$file" "$new_name"
    echo "[]: Updated '$file' to '$new_name'"
done

exit 0