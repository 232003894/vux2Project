## <span class="vux-big-title">H5+API简介</span>
整合并统一了dom和h5+的基础方法，并进行了一些扩展

库地址：[h5+.js][1]

```javascript
// 直接引用
import * as $api from 'h5p.js'

// 或者注册到全局
import * as _api from 'h5p.js'
if (!window.$api) {
  window.$api = _api
}
```
> 在后面的文档示例中统一用`$api`
<br>

- <span class="vux-params">按照类别可以分为：</span>
  - [Utils](./#/md/api/Utils.md)（辅助方法）：类别判断、日志、html处理、合并、模板转换等
  - [Action](./#/md/api/Action.md)（附加操作）
  - [Back](./#/md/api/Back.md)（后退操作），对action进行的扩展
  - [Event](./#/md/api/Event.md)（事件通知）
  - [Filter](./#/md/api/Filter.md)（过滤转换），数字、金额、日期、单词复数、大小写、首字母大写等转换，并可以注册为Vue的过滤器
  - [OS](./#/md/api/运行环境.md)（运行环境），系统名称，版本，是否微信等
  - [Storage](./#/md/api/Storage.md)（本地存储），对 window.localStorage 的封装扩展
  - [Dialog](./#/md/api/消息弹窗.md)（消息弹窗），对dom、h5+整合的统一弹窗消息调用，包括：alert、confirm、toast、loading等
  - [Windows](./#/md/api/窗体操作.md)（窗体操作），窗口打开、关闭、显示隐藏、dom加载完成事件、plus加载完成事件等
  - [设备相关](./#/md/api/设备相关.md)，监听back和menu按键、判断是否有网络
  - [Pages](./#/md/api/页面字典.md)（页面字典），所有页面的字典
- <span class="vux-params">按照使用场景可以分为：</span>
  - [web通用](./#/md/api/通用.md)
  - [H5+扩展](./#/md/api/H5Plus扩展.md)
  - [组件扩展](./#/md/api/组件扩展.md)


<br>
## <span class="vux-big-title">扩展组件</span><br>
1. [Icon](./#/md/com.md?id=-xe607-icon)
2. [ViewBox](./#/md/com.md?id=-xe607-viewbox)
3. [XHeader](./#/md/com.md?id=-xe607-xheader)


<br>
## <span class="vux-big-title">项目说明</span><br><br>

#### <span class="vux-method-title">1. 事件</span><br>

- <span class="vux-params">登录完成事件：'logined'</span><br>
```javascript
//在需要的监控登录完成事件的地方
document.addEventListener('logined', function(e) {
    console.log('登录完成事件')
    // 登录完成的相关实现。。。
    // e.detail为数据对象（data）
})
```

- <span class="vux-params">【未实现，需要在注销的地方实现】用户注销完成事件：'logouted'</span><br>
```javascript
//在需要的监控用户注销完成事件的地方
document.addEventListener('logouted', function(e) {
    console.log('用户注销完成事件：')
    // 注销完成的相关实现。。。
})
```

- <span class="vux-params">待续...</span><br>

<br>
#### <span class="vux-method-title">2. 消息弹窗组件</span><br>
> 以vue插件的方式，覆盖$api中的消息api，调用vux组件中的弹窗组件<br>

```javascript
// 弹窗
$api.alert('消息123',{
  title:'标题',
  buttonText:'知道了',
  onShow:()=>{
    console.log('alert onShow')
  },
  onHide:()=>{
    console.log('alert onHide')
  }
})
// 关闭弹窗
$api.alertClose()
```
- <span class="vux-params">Alert：</span>[[alert]](./#/md/api/消息弹窗.md?id=-xe65d-alert) 、[[alertClose]](./#/md/api/消息弹窗.md?id=-xe65d-alertclose)
- <span class="vux-params">Confirm：</span>[[confirm]](./#/md/api/消息弹窗.md?id=-xe65d-confirm) 、[[confirmClose]](./#/md/api/消息弹窗.md?id=-xe65d-confirmclose)
- <span class="vux-params">Loading：</span>[[loading]](./#/md/api/消息弹窗.md?id=-xe65d-loading) 、[[loadingClose]](./#/md/api/消息弹窗.md?id=-xe65d-loadingclose)
- <span class="vux-params">Toast：</span>[[toast]](./#/md/api/消息弹窗.md?id=-xe65d-toast) 、[[toaseClose]](./#/md/api/消息弹窗.md?id=-xe65d-toastclose)
- <span class="vux-params">Login：</span>[[login]](./#/md/api/消息弹窗.md?id=-xe65d-login) 、[[loginClose]](./#/md/api/消息弹窗.md?id=-xe65d-loginclose) 、[[loginCancle]](./#/md/api/消息弹窗.md?id=-xe65d-logincancle)

<br>
#### <span class="vux-method-title">3. 过滤器</span> <br>
> 将$api过滤器中的方法，都注册到vue的过滤中，可以在模板中使用

```html
<p>{{ date | formatDate('yyyy-MM-dd') }}</p>
```
1. <span class="vux-params">[[capitalize]](./#/md/api/Filter.md?id=-xe65d-capitalize)：</span>字符串格式化，首字母大写：'abc' => 'Abc'
1. <span class="vux-params">[[lowercase]](./#/md/api/Filter.md?id=-xe65d-lowercase)：</span>字符串格式化，小写：'AbC' => 'abc'
1. <span class="vux-params">[[uppercase]](./#/md/api/Filter.md?id=-xe65d-uppercase)：</span>字符串格式化，大写：'abc' => 'ABC'
1. <span class="vux-params">[[pluralize]](./#/md/api/Filter.md?id=-xe65d-pluralize)：</span>单词复数
1. <span class="vux-params">[[currency]](./#/md/api/Filter.md?id=-xe65d-currency)：</span>货币格式化，解决原生js toFixed 四舍五入的问题
1. <span class="vux-params">[[number]](./#/md/api/Filter.md?id=-xe65d-number)：</span>数字格式化，解决原生js toFixed 四舍五入的问题
1. <span class="vux-params">[[formatDate]](./#/md/api/Filter.md?id=-xe65d-formatdate)：</span>对日期进行格式化

<br>
#### <span class="vux-method-title">4. ajax</span><br>
> 使用官方推荐的axios

> 库地址：[axios][2]

> 中文文档：[文档][3]


```javascript
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])

axios.get('Advertisement', {
  params:{
    s_id:1,
    w:0
  },
  app: {
    webError:$box.webError,
    load:true,
    loginCallback:() => {
      console.log('loginCallback')
    }
  },
  timeout:3000
})
```


1. <span class="vux-params">添加了自定义header</span>
    - v：请求版本
    - d：设备唯一码
    - w：设备的显示宽度
2. <span class="vux-params">配置了axios.defaults.baseURL</span>
    - 开发：http://192.168.2.241:8004
    - 发布：https://app.xxx.com/
3. <span class="vux-params">添加请求拦截</span>
    - header
      - t：token
      - s：sign 
    - 请求拦截：
      - 请求配置中新增app参数：可用于后续的错误提示的方式和权限操作等
        - load:请求是加载还是操作类型，
        - webError:$box的webError，用于错误的界面显示或提示
        - loginCallback:用于登录后的指定回调
4. <span class="vux-params">添加响应拦截</span>
    - 输出统一的json格式数据
    - 统一系统错误处理：404 503 ，超时 等
    - 权限处理：登录或店铺


> 服务端response的json格式<br>

```javascript
// 服务端response的json格式
{
  "version": "1.0.0",
  "sys": {
    "code": 0,
    "msg": null,
    "data": null,
    "acts": []
  },
  "biz": {
    "code": 0,
    "msg": null,
    "data": null,
    "acts": [
      {
        "code": "00",
        "name": "登录"
      }
    ],
    pager:{}
  }
}
```
> 响应拦截后输出的格式化json<br>

```javascript
// 响应拦截后输出的格式化json
{
  'version': '1.0.0',
  'type': 'biz',
  'ok': true，
  'code': 0,
  'msg': null,
  'data': null,
  'acts': []
}
```

## <span class="vux-big-title">参考</span>
- [axios][2]
- [vue][4]
- [HTML5+ API][6]
- [vux][5]

[1]: https://github.com/232003894/H5Plus "h5+.js"
[2]: https://github.com/mzabriskie/axios "axios"
[3]: http://www.kancloud.cn/yunye/axios/234845 "文档"
[4]: http://cn.vuejs.org/v2/guide/ "vue"
[5]: https://vux.li/ "vux"
[6]: http://www.html5plus.org/doc/h5p.html "HTML5+ API"