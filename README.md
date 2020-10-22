# vue-pbl
使用vue-waterfall2插件实现的瀑布流
注意事项：HTML body  所有的父盒子不能设置高度因为设置高度之后，浏览器会检测不到滚动到底部的事件

以上便是瀑布流的代码，但是别的页面肯定要设置html，body的高度为100%的，解决办法就是在app.vue里去监听路由手动添加className设置样式
```javascript
  watch: {
    $route (to, from) {
      // console.log(to, from)
      //根据自己项目所用到的瀑布流页面去修改
      if (to.path !== '/index') {
        document.getElementsByTagName('body')[0].className = 'home'
        document.getElementsByTagName('html')[0].className = 'home'
      } else {
        document.getElementsByTagName('body')[0].className = ''
        document.getElementsByTagName('html')[0].className = ''
      }
    }
  }


