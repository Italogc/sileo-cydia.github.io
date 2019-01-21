#!/bin/sh
标题
perl -p -i -e "s/852359//g"  样本2.json
#描述
perl -p -i -e "s/852360//g"  样本2.json
#大小
perl -p -i -e "s/852362//g"  样本2.json

mv 样本2.json .json

cp 样本.json 样本2.json




