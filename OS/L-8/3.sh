#!/bin/bash

echo "[]: Files in current directory:"
ls -lh

echo
echo "[]: Total files: $(ls -lh | grep "^-" | wc -l)"

exit 0