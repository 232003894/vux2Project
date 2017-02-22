

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Back </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">addBack(hook)</b><br><br>添加'backs'类型action的钩子


<br><span class="vux-big-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>hook</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>hook action处理对象</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| name | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 名称 |
| index | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 排序值,默认值:1000 |
| handle | <span class="type type-function">Function</span> | <span class="type type-boolean">true</span> | 处理钩子,返回false代表中断,反之则继续 |


<br>


<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：返回'backs'类型的钩子集合

<br><span class="vux-big-title">示例：</span>

<br>

``` js
// 添加初始化action
$api.addAction( {
  name:'browser',
  index:100,
  handle:function () {
    console.log('browser backs')
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addMsgBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">addMsgBack(hook)</b><br><br>添加'msgBacks'类型action的钩子


<p class="tip">在安卓设备中时，后退键时会先关闭此类类型（'msgBacks'），并终止back
</p>

<br><span class="vux-big-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>hook</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>hook action处理对象</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| name | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 名称 |
| index | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 排序值,默认值:1000 |
| handle | <span class="type type-function">Function</span> | <span class="type type-boolean">true</span> | 处理钩子,返回false代表中断,反之则继续 |


<br>


<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：返回'msgBacks'类型的钩子集合

<br><span class="vux-big-title">示例：</span>

<br>

``` js
// 添加初始化action
$api.addMsgBack( {
  name:'browser',
  index:100,
  handle:function () {
    console.log('browser msgBacks')
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>back</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">back([closeMsg])</b><br><br>执行back action(后退)<br>
比如header的后退


<p class="tip">执行顺序:msgback > beforeback > back的hooks<br>
back的hooks中则更加index的顺序来执行,一般情况下是先 h5+的back 再web的back
</p>

<br><span class="vux-big-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[closeMsg]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>是否先执行msg类型的关闭(常用于安卓后退按键的后退),默认值false</code>

<br>


<br><span class="vux-big-title">示例：</span>

<br>

``` js
// 直接后退
$api.back()
// 如果有msg先关闭msg
$api.back(true)

```

<br><span class="vux-big-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  合并了backWithMsg方法,通过closeMsg参数</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>canHistoryBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">canHistoryBack()</b><br><br>是否可以后退


<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否可以后退

<br><span class="vux-big-title">示例：</span>

<br>

``` js
// set true
$api.canHistoryBack()

```

<br><span class="vux-big-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  改为是否可以后退</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  getCanHistory和setCanHistory 合并为 canHistoryBack</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>menu</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">menu()</b><br><br>H5Plus 菜单


<p class="warning">只在 H5+模式 模式中有效
</p>

<br><span class="vux-big-title">示例：</span>

<br>

``` js
$api.menu()

```

<br><span class="vux-big-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现菜单功能</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>plusBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">plusBack()</b><br><br>H5Plus back


<p class="warning">只在 H5+模式 模式中有效
</p>

<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否执行完成<br/><br/>
> 在需要退出app的情况时,<br/>
> 第一次back会提示‘再按一次退出应用’,<br/>
> back其实没有执行成功,<br/>
> 只有连续2次back,才会执行成功<br/>
> 在弹出权限层的时候,可以根据返回值true或false进行后续业务


<br><span class="vux-big-title">示例：</span>

<br>

``` js
$api.plusBack()

```

<br><span class="vux-big-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  增加返回值,表示是否执行完成</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>removeBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">removeBack(name,index)</b><br><br>删除'backs'类型action的钩子


<br><span class="vux-big-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>name</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>index</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：该类型的钩子集合

<br><span class="vux-big-title">示例：</span>

<br>

``` js
// 删除指定的'backs'action
$api.removeBack('browser',100)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>removeMsgBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">removeMsgBack(name,index)</b><br><br>删除'msgBacks'类型action的钩子


<br><span class="vux-big-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>name</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>index</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-big-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：该类型的钩子集合

<br><span class="vux-big-title">示例：</span>

<br>

``` js
// 删除指定的'msgBacks'action
$api.removeBack('browser',100)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setPreBack</span>


 ------------ 

<br><span class="vux-big-title">用法：</span>

 <br> 

 > <b style="color:blue">setPreBack(preBack)</b><br><br>设置back前处理


<br><span class="vux-big-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>preBack</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>back action 前的预处理方法</code>

<br>


<br><span class="vux-big-title">示例：</span>

<br>

``` js
$api.setPreBack(()=>{
  $api.log('back前处理')
})

```
<br>