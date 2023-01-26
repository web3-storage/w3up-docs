#!/usr/bin/env bash

set -eo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

node ${SCRIPT_DIR}/api-docs.js --clean
node ${SCRIPT_DIR}/glossary-page.js
