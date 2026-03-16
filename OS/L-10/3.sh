#!/bin/bash

file1="f1.txt"
file2="f2.txt"

if [ ! -f "$file1" ]; then
    touch "$file1"
    
    echo "============================================="
    echo " WRITE CONTENT FOR $file1 | Then exit CAT"
    echo "============================================="
    echo

    cat >> "$file1"
fi

if [ ! -f "$file2" ]; then
    touch "$file2"

    echo "============================================="
    echo " WRITE CONTENT FOR $file2 | Then exit CAT"
    echo "============================================="
    echo

    cat >> "$file2"
fi

echo
if cmp -s "$file1" "$file2"; then
    echo "[]: Files are same."
else
    echo "[]: Files are different."
fi

echo
read -p "[]: Do you want to delete the files? (y/n): " choice

if [[ "$choice" == "y" || "$choice" == "Y" ]]; then
    rm -f "$file1" "$file2"
    echo "[]: Files deleted."
else
    echo "[]: Files not deleted."
fi

exit 0