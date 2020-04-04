## 1.npm的使用
- node package manager   (包) package.json 包就是多个文件的集合


-npm 使用的时候分为两种包  全局包（只能在命令行中使用）  本地宝（只能在当前项目中使用）

npm在path中，所以全局安装的模块，会连接到npm下，所以也可以直接使用
C:\Users\73530\AppData\Roaming\npm\hs -> C:\Users\73530\AppData\Roaming\npm\node_modules\http-server\bin\http-server


C:\Users\73530\AppData\Roaming\npm\http-server -> C:\Users\73530\AppData\Roaming\npm\node_modules\http-server\bin\http-server

### nrm（源） npm（包） nvm（版本）

npm install nrm -g
nrm ls     查看所有的源
nrm cnpm   切换源

### 创建自己的包
-package.json生成
-npm init -y

-npm link   链接    在全局的npm包下做一个链接

## script脚本
-npm run的功能是将当前目录下的node_modules的bin目录放到path环境下，如果run后面有命令会执行相应的命令，这个命令在.bin目录下回直接执行

## npx的用法（npm run / npx）
-  5.2的新版本出的功能，为了方便   但无法记录脚本

## yarn
-快，但不能和npm共用
-yarn add / yarn remove

##

## 2.node中核心模块（until/events）

## 3.Buffer的应用

## 4.fs的应用及流