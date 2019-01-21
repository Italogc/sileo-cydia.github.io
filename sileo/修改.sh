#!/bin/sh
标题
perl -p -i -e "s/852359/ 隐藏状态栏指示器/g"  样本2.json
#描述
perl -p -i -e "s/852360/隐藏状态栏指示器(通话,录制屏幕,定位).暂时隐藏录屏指示器就行,隐藏其他原素,会使录屏有bug/g"  样本2.json
#大小
perl -p -i -e "s/852362/196/g"  样本2.json

mv 样本2.json silentrecorder.json

cp 样本.json 样本2.json




