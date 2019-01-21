#!/bin/sh


#描述
perl -p -i -e "s/852360/无需签名安装ipa应用/g"  样本2.json
#描述2
perl -p -i -e "s/🀙/🀙/g"  样本2.json
#大小
perl -p -i -e "s/852362/1488/g"  样本2.json
#支持版本
perl -p -i -e "s/852363/ios10-11/g"  样本2.json
#更新日期
perl -p -i -e "s/852364/31.1/g"  样本2.json

mv 样本2.json appsyncunified.json

cp 样本.json 样本2.json
