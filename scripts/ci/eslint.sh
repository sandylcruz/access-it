#!/bin/bash

set -e

echo "About to perform esint run"

yarn eslint:ci

echo "ESLint was a success"