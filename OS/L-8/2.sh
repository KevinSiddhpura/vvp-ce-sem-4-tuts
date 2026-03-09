#!/bin/bash

echo "[]: Files in current directory:"
ls -lh

echo
echo "[]: Sorting in descending order by size:"
ls -lh | sort -hr -k 5

echo
echo "[]: Sorting in descending order by size using grep:"
ls -lhS | grep "^-" | head -n 5

exit 0