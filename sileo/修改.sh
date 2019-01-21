#!/bin/sh
标题
perl -p -i -e "s/852359/屏蔽越狱检测/g"  样本2.json
#描述
perl -p -i -e "s/852360/屏蔽越狱监测.开启支付设置/g"  样本2.json
#大小
perl -p -i -e "s/852362/47/g"  样本2.json

mv 样本2.json libertylite.json

cp 样本.json 样本2.json




