# 安装

要求nodejs 版本大于8.0

```shell
git clone git@github.com:RubyLouvre/anu.git
# 或 git clone https://github.com/RubyLouvre/anu.git
```

1 命令行定位到`packages/cli`目录下，执行`npm link`如果之前装过要先`npm unlink` <br />
2 使用`mpreact <project-name>` 创建工程<br />
3 定位到 `<project-name>` 目`录下 mpreact start 开始监听文件变化，<br />
4 用微信开发工具打开当中的dist目录，自己在src目录中进行开发