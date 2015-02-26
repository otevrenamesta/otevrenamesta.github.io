#!/bin/bash

# remove quotes

cat main.lmd | sed -e 's/  (\([0-9]\{1,\}\).\([0-9]\{1,\}\).\([0-9]\{1,\}\))/    - \\label{b\1x\2x\3} (\1.\2.\3)/g' \
-e 's/\[\([0-9]\{1,\}\).\([0-9]\{1,\}\).\([0-9]\{1,\}\)\]/\\hyperref\[b\1x\2x\3]{\1.\2.\3}/g' \
-e 's/^(\([0-9]\{1,\}\).\([0-9]\{1,\}\))/- \\label{b\1x\2} (\1.\2)/g' \
-e 's/\[\([0-9]\{1,\}\).\([0-9]\{1,\}\)\]/\\hyperref\[b\1x\2]{\1.\2}/g' > temp.md

vlna temp.md
# korekce na vlnu

cat temp.md | sed 's/\([vkuoszVKUOSZ]\)\~/\1 /g' > main.md
# rm -f temp.md

makelegal

mv main.md main_commented.md
mv main.pdf main_commented.pdf

cat main_commented.md | sed '/^>/ d' > main.md
# make paragraph anchors (labels)

makelegal
rm main.md
rm main_commented.md
rm temp.md
