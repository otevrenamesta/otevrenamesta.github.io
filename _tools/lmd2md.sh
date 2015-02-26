#!/bin/bash

# remove quotes

cat main.lmd | sed -e 's/  (\([0-9]\{1,\}\).\([0-9]\{1,\}\).\([0-9]\{1,\}\))/    - <a name=\"b\1x\2x\3\">(\1.\2.\3)<\/a>/g' \
-e 's/\[\([0-9]\{1,\}\).\([0-9]\{1,\}\).\([0-9]\{1,\}\)\]/[\1.\2.\3](#b\1x\2x\3)/g' \
-e 's/^(\([0-9]\{1,\}\).\([0-9]\{1,\}\))/- <a name=\"b\1x\2\">(\1.\2)<\/a>/g' \
-e 's/\[\([0-9]\{1,\}\).\([0-9]\{1,\}\)\]/[\1.\2](#b\1x\2)/g' > temp.md

vlna temp.md
# korekce na vlnu

cat temp.md | sed 's/\([vkuoszVKUOSZ]\)\~/\1 /g' > main_commented.md
rm -f temp.md

cat main_commented.md | sed '/^>/ d' > main.md
# make paragraph anchors (labels)
