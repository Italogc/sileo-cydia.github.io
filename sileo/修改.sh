#!/bin/sh


#描述
perl -p -i -e "s/852360/来电时自动应答.破解汉化版/g"  样本2.json
#描述
perl -p -i -e "s/852361/ /g"  样本2.json
版本
perl -p -i -e "s/852362/0.4-21/g"  样本2.json
支持版本
perl -p -i -e "s/852363/ios11/g"  样本2.json

mv 样本2.json answeringmachinex.json

cp 样本.json 样本2.json
