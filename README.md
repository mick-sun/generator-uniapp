# Uniapp generator [![Gitter](https://img.shields.io/badge/Gitter-Join_the_Yeoman_chat_%E2%86%92-00d06f.svg)](https://gitter.im/yeoman/yeoman)

> 一个基于Yeoman的uniapp项目脚手架生成器 - 使您可以使用合理的默认值和最佳实践快速设置项目。

## 使用用法

安装 `yo`, `generator-uniapp`:
```
npm install -g  yo generator-uniapp
// or
yarn add global yo generator-uniapp
```

如果您打算使用Sass，则需要首先安装Ruby和Compass：
- 从[此处](http://rubyinstaller.org/downloads/)下载或使用 `Homebrew` 安装 `Ruby`
- 使用 `gem` 安装 `compass`:
```
gem install compass
```

创建一个新目录，并cd进入：
```
mkdir my-new-project && cd $_
```

运行 `yo uniapp`, 可以选择传递应用名称：
```
yo uniapp [app-name]
```

运行 `yarn` 安装依赖关系并 `yarn serve` 进行预览

## Generators

可用的 generators:

* [uniapp](#app) (aka [uniapp:app](#app))
* [uniapp:component](#component)
* [uniapp:page](#page)
* [uniapp:service](#service)
* [uniapp:store](#store)
* [uniapp:style](#style)

### App
开始一个新的 uniapp 项目，生成项目基础代码，Generator会自动依赖dcloudio和vuejs的一些模块，包括vuex和 [flyio](https://github.com/wendux/fly) 作为默认的请求工具

例子:
```bash
yo uniapp
```

### Component
生成一个全局组建

例子:
```bash
yo uniapp:component MyComponent
```

生成 `src/components/my-component/my-component.vue`:
```vue
<template>
  <view class="my-component"></view>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {}
}
</script>

<style lang="scss" scoped>
  .my-component {

  }
</style>
```

### Page
生成页面并在 `src/pages.json` 中注册路由


例子:
```bash
yo uniapp:page my-page
```
产生 `src/pages/my-page/my-page.vue`:
```vue
<template>
  <view class="my-page"></view>
</template>

<script>
export default {
  name: 'MyPage',
  data () {
    return {}
  },
  onLoad () {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .my-page {

  }
</style>
```
**通过参数指定是否生成路由和页面标题**

Example:
```bash
yo uniapp:page my-page --route --title="my page"
```

产生如上的页面并添加一条路由信息到 `src/pages.json`
```json
{
  "pages": [
    ...
    {
      "path": "pages/my-page/my-page",
      "style": {
        "navigationBarTitleText": "my page"
      }
    } 
    ...
  ],
  ...
}
```

当然，您也可以指定生成的子目录。

例子:
```bash
yo uniapp:page user/address --route --title="Address"
```

产生 `src/pages/user/address/address.vue`:
```vue
<template>
  <view class="address"></view>
</template>

<script>
export default {
  name: 'Address',
  data () {
    return {}
  },
  onLoad () {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .address {

  }
</style>
```

### Service
创建一个 `api service` 文件

例子:
```bash
yo uniapp:service home
```
产生 `src/services/home.js`:
```js
import request from '@/utils/request'

export function get (params) {
  return request.get('get-url', params, {
    // headers config
  })
}

export function post (parameter) {
  return request.post('post-url', parameter, {
    // headers config
  })
}
```

### Store
创建一个 `Vuex Module` 文件

例子:
```bash
yo uniapp:store cart
```
产生 `src/store/modules/cart.js`:
```js
const cart = {
  state: {

  },
  mutations: {

  },
  actions: {

  }
}

export default cart
```

**你需要收到在 `store/index.js` 中去引入这个文件**

### Style
创建一个样式文件，默认使用SASS

例子:
```bash
yo uniapp:style home
```
产生 `src/styles/home.scss`:
```scss
.home {

}
```
生成的样式文件会自动在 `src/styles/app.scss` 中引入
```scss
@import "./iconfont";
@import "./global";
@import "./skeleton";
@import "./home"; // add this line
```
## License

[MIT License](http://opensource.org/licenses/bsd-license.php)
