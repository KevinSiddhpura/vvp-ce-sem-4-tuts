#!/bin/bash

echo "[]: Files in current directory:"
ls -lh

echo
echo "[]: Total files: $(ls -l | grep "^-" | wc -l)"

exit 0