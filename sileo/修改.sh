#!/bin/sh
标题
perl -p -i -e "s/852359/微信助手/g"  样本2.json
#描述
perl -p -i -e "s/852360/微信助手.开启微信上传视频超过30秒,开启微信ipad登录,开启callkit通话,等等/g"  样本2.json
#大小
perl -p -i -e "s/852362/26/g"  样本2.json

mv 样本2.json wechathelper.json

cp 样本.json 样本2.json




