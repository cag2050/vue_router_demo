# vue_router_demo  

组件有一个子组件，用嵌套路由children，children中定义component（只有一个），一个router-view；  
组件有多个子组件，在children中定义components（多个），用多个router-view引用。  

说明：  
components文件夹中添加组件vue;  
router/index.js中导入组件、添加路由;  
App.vue添加router-link。 

eslint配置：  
.editorconfig 修改：indent_size = 4；  
.eslintrc.js 规则rules中添加一行：'indent': [2, 4, { "SwitchCase": 1 }]；  
build/webpack.base.config.js 在eslint-loader配置部分，在语句：include: [resolve('src/components'), resolve('test')] 中配置需要校验的目录  

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
