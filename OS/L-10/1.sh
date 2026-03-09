#!/bin/bash

read -p "[]: File to update characters: " file

if [ ! -f "$file" ]; then
    echo "[]: File $file was not found."
    exit 1
fi

echo "================================================"
echo "[]: Current File State"
echo -e "================================================\n"

cat "$file"

echo -e "\n================================================"
echo "[]: Updated File State"
echo -e "================================================\n"

tmp_file="${file}.temp"

tr 'a-zA-Z' 'A-Za-z' < "$file" > "$tmp_file"

cat "$tmp_file"

mv "$tmp_file" "$file"

echo -e "\n================================================"
exit 0