#! /usr/bin/env bash

#########################################################################
#### Keeps changelog and readme at root in sync with packages/seedblocks ####
#########################################################################

for file in CHANGELOG.md README.md; do
  rootFile="${PWD}/$file"
  seedblocksFile="packages/seedblocks/$file"
  if [[ "$*" =~ $rootFile ]] && [[ "$*" =~ $seedblocksFile ]]; then
    # If both staged do nothing and let commit continue
    exit 0
  fi

  if [[ "$*" =~ $rootFile ]]; then
    cp "$rootFile" "$seedblocksFile"
    git add "$seedblocksFile"
  fi

  if [[ "$*" =~ $seedblocksFile ]]; then
    cp "$seedblocksFile" "$rootFile"
    git add "$rootFile"
  fi
done
