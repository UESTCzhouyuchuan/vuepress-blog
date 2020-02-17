#!/usr/bin/env bash
#
# VuePress 通用部署脚本
#
# Windows 无法执行 .sh 文件，需要安装 git 客户端
#
# Author: cnguu
# Email: www@cnguu.cn
#

# 开始
set -e

# 编译
# package.json 中需要有这一句："build": "vuepress build docs"
npm run build

# 先删除dist_push目录下文件
cd dist_push
rm -rf `ls | grep -v ".git"`
cd ..
# 复制 dist 文件夹到 dist_push 文件夹
cp -rf dist/* dist_push

# 复制 README.md 文件到 dist_push 文件夹
cp -f README.md dist_push

# 进入 dist_push 目录
cd dist_push

# 新建 CNAME 文件，并写入 域名
echo -e blog.yulovexin.xyz > CNAME

# 初始化仓库
git init

# 添加
git add -A

# 提交
git commit -m deploy

# 强制推送到 name.github.io 仓库的 master 分支
git push -f git@github.com:UESTCzhouyuchuan/UESTCzhouyuchuan.github.io.git master

# 多仓库部署开始 ------

# 删除 CNAME
#rm CNAME

# 新建 CNAME 文件，并写入 www.gleehub.com 域名
#echo www.gleehub.com > CNAME

# 添加
#git add -A

# 提交
#git commit -m deploy

# 强制推送到 cnguu.github.io 仓库的 master 分支
#git push -f git@git.dev.tencent.com:cnguu/cnguu.coding.me.git master

# 多仓库部署结束 ------

# 返回上一级目录
cd ../

# 删除 dist_temp 文件夹
rm -fr dist_temp

# 结束