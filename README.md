# Webpack4 学习
git 提交时如果想忽略某些文件或者目录：
1.创建 .gitignore 文件 
2.#过滤数据库文件、sln解决方案文件、配置文件,不忽视 .txt 文件
*.mdb
*.ldb
*.sln
*.config
*!.txt
#过滤文件夹Debug目录及文件,忽视Release,obj目录
Debug
Release/
obj/
