#!/bin/bash

files=$(ls | grep ".txt")

if [ -z $files ]; then
    echo "[]: No files found with '.txt' extension"
    exit 1
fi

for file in $files; do
    mv "$file" "${file%.txt}.doc"
    echo "[]: Updated '$file' to '${file%.txt}.doc'"
done

exit 0