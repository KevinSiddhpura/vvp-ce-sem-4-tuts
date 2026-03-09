#!/bin/bash

echo "[]: Files in current directory:"
ls -lh | sort -hr -k 5

count=$(ls -l | grep "^-" | wc -l)

echo
echo "[]: Total files: $count"

exit 0