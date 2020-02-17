---
title: 上传文件到腾讯云失败

meta:
  - name: description

    content: 上传文件到腾讯云

  - name: keywords

    content: FileZilla,TencentCloud

created: 2020/02/13

updated: 2020/02/13

tags:
  - FileZilla
  - TencentCloud

banner: /20200213/cloud.png
---

## 问题描述

使用 filezilla 上传文件到腾讯云服务器失败。

## 问题分析

TencentCloud 的服务器(ubuntu 系统)默认用户名为 ubuntu,而不是 root，使用 ssl 登陆得用户也就是普通用户 ubuntu 而不是超级用户 root。

::: tip
而且腾讯云可能为了安全，不能使用 ssl 登陆 root 用户(艹 一种植物)
:::

在使用`xshell`(一种命令行终端)登陆服务器后,习惯`sudo su`切换到超级用户再进行操作。

那么，问题来了。在 root 角色下新建一个文件夹，此时文件所有者是 root 默认其他用户无修改权限。

```shell
root# mkdir testDir
root# la -all
total 20
drwxr-xr-x 4 root root 4096 Feb 13 14:11 .
drwxr-xr-x 8 root root 4096 Dec 19 17:37 ..
drwxrwxrwx 2 root root 4096 Feb 13 14:04 cert
-rw-r--r-- 1 root root  464 Feb 13 12:47 nginx.conf
drwxr-xr-x 2 root root 4096 Feb 13 14:11 testDir
```

当我作为普通用户 ubuntu 远程连接服务器时，是无法传文件到该文件夹。

## 解决办法

- 在普通用户 ubuntu 下创建文件夹
- 使用`chmod 777 name`改变文件权限
