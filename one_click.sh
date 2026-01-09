#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

echo "[ONE-CLICK] Running ./setup.sh"
./setup.sh

echo "[ONE-CLICK] Running tests"
python3 run_tests.py

echo "[ONE-CLICK] Done"
