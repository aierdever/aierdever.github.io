---
title: "combobox下拉框"
subSidebar: true
categories:
- pc框架
tags:
- pc框架 , 表单
comments: true
---
:::: tip 说明
`combobox`是easyUI的一个很实用的控件，功能完整，快速平台中没有做进一步封装，这里只做常用示例。
更多实例请 [参考这里](http://www.jeasyui.net/demo/488.html)
::::

## 示例代码：

**html方式初始化:**

```html
<label class="col-xs-2 control-label">关联网站：</label>
<div class="col-xs-4 control-cont">  <!-- input添加class easyui-combobox来初始化combobox -->
   <input 
   class="form-control easyui-combobox required" style="width:100%;" 
   id="userSites" type="text" name="userSites" value="" placeholder="请选择关联组织" 
   data-options="valueField: 'id',textField: 'text',url: 'json/combo.js',multiple:true"
   />
</div>
```

**js方式初始化:**

```js
$('#cc').combobox({
    url:'combobox_data.json',//请求地址
    valueField:'id',//value值
    textField:'text',//text值
    ,multiple:true//是否多选
    onSelect: function(rec){//select事件
        var url = 'get_data2.php?id='+rec.id;
        $('#cc2').combobox('reload', url);
    }"
});
```

**数据参考：**

```json
[{
    "id":1,
    "text":"text1"
},{
    "id":2,
    "text":"text2"
},{
    "id":3,
    "text":"text3",
    "selected":true//是否选中
},{
    "id":4,
    "text":"text4"
},{
    "id":5,
    "text":"text5"
}]
```