# vue cli v3.0 项目创建
vue-cli 3 与 2版本有很大区别
- vue-cli 3 是基于webpack 4打造，vue-cli 2还是webpack 3
- vue-cli 3 的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录
- vue-cli 3 提供了vue ui命令，提供了可视化配置
- 移除了static文件目录，新增了public文件目录，并且index.html移动到public中

创建流程
- `vue create 项目名`
- 选择配置方式
    ![](http://image.beloved.ink/Typora/20200512150412.png)
- 按需选择需要的配置，空格选择
    ![](http://image.beloved.ink/Typora/20200512150752.png)
- 选择配置文件的生成方式
    ![](http://image.beloved.ink/Typora/20200512151921.png)
- 要不要将自己的设置保存下来
    ![](http://image.beloved.ink/Typora/20200512152615.png)
- 设置保存的名称
    ![](http://image.beloved.ink/Typora/20200512152655.png)

**删除自己保存的配置**

在`C:\Users\Beloved\.vuerc`这个文件中是自己的配置信息。删除对应的配置即可
```
{
  "useTaobaoRegistry": false,
  "presets": {
    "vuetest": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {}
      }
    }
  }
}
```
## 目录结构
![](http://image.beloved.ink/Typora/20200512154128.png)

## UI图形界面配置
**命令：**`vue ui`
![](http://image.beloved.ink/Typora/20200512154413.png)
![](http://image.beloved.ink/Typora/20200512154551.png)

## 自定义配置
在根目录下创建`vue.config.js`文件，配置webpack

