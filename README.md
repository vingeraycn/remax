# Remax 模板

### 开始使用

```bash
# clone 模板
git clone https://github.com/LeiHanCN/remax.git <your-project-name>

# 进入到脚本路径下，初始化项目
cd <your-project-name>/scripts
chmod 777 init.sh
./init.sh

# 回到项目目录下
cd ..

# 安装依赖
yarn
# 开发微信小程序
yarn dev wechat
# 打包微信小程序
yarn build wechat
# 用微信小程序开发者工具进入dist/[target]目录，上传发布即可
```

### 开发建议

```bash
# 提交代码使用
yarn cz
```