#!/bin/sh
标题
perl -p -i -e "s/852359/ /g"  样本2.json
#描述
perl -p -i -e "s/852360/ /g"  样本2.json
#大小
perl -p -i -e "s/852362/3/g"  样本2.json
#支持版本
#perl -p -i -e "s/852363/ios11/g"  样本2.json
#perl -p -i -e "s/852363/ios11/g"  样本2.json
#更新日期
#perl -p -i -e "s/852364/2019-01-21/g"  样本2.json

mv 样本2.json sileozh.json

cp 样本.json 样本2.json
