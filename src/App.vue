<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>路由列表：</div>
    <router-link to="/">主页</router-link><br/>
    <router-link to="/navi">navi</router-link><br/>
    <router-link to="/footer">footer</router-link><br/>
    <router-link to="/logo">logo</router-link><br/>
    <router-link to="/navi_logo">嵌套路由children：Navi组件中包含Logo组件和Footer组件，Navi组件有2个router-view</router-link><br/>
    <router-link to="/header_footer">命名视图components：header加footer，App.vue有2个router-view</router-link><br/>
    <router-view></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
