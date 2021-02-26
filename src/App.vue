<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

  background-color: #f7f7f7;
}

#app a {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
#app a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
#app a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
#app a:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
#app a:active {
    text-decoration: none;
}

/*路由按钮*/
#app .router-link-active {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
#app .router-link-active:link {
    text-decoration: none;
}
/*已经访问过的链接*/
#app .router-link-active:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
#app .router-link-active:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
#app .router-link-active:active {
    text-decoration: none;
}
</style>
