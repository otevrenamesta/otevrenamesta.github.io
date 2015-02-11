#!/bin/bash

cat $1 | sed '/^>/ d' | \
# make paragraph anchors
sed 's/  (\([0-9]\{1,\}.[0-9]\{1,\}.[0-9]\{1,\}\))/  - <a name=\"b\1\"><\/a>(\1)/g' | \
# make links within text
sed 's/\[\([0-9]\{1,\}.[0-9]\{1,\}.[0-9]\{1,\}\)\]/[\1](#b\1)/g' | \

# make the same with paragraps of 2nd level
sed 's/^(\([0-9]\{1,\}.[0-9]\{1,\}\))/- <a name=\"b\1\"><\/a>(\1)/g' | \
sed 's/\[\([0-9]\{1,\}.[0-9]\{1,\}\)\]/[\1](#b\1)/g' > $2
