
## 使用

Vue多页项目模板.建议使用NPM 3 +

``` bash
$ npm install -g vue-cli

$ vue init 232003894/vux2Project vue2-project

$ cd vue2-project

$ npm install

$ npm run dev
```

## 内容

- `npm run dev`: 8080端口
  - Webpack + `vue-loader` : 单文件Vue组件.
  - 热加载.
  - chrome打开`html/index.html`页面.

- `npm run build`: 生成发布.
  - JavaScript压缩 [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - CSS从组件中提取并压缩 [cssnano](https://github.com/ben-eb/cssnano).
  - 拷贝生成文件到指定目录.

- `npm run build+`: 生成发布（不压缩js）.
  - CSS从组件中提取并压缩 [cssnano](https://github.com/ben-eb/cssnano).
  - 拷贝生成文件到指定目录.

API文档：文档：[http://jefferic.oschina.io/yipifaguanjia/#/md/api.md](http://jefferic.oschina.io/yipifaguanjia/#/md/api.md)
