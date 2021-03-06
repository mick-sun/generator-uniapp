# Uniapp generator [![Gitter](https://img.shields.io/badge/Gitter-Join_the_Yeoman_chat_%E2%86%92-00d06f.svg)](https://gitter.im/yeoman/yeoman)

> Yeoman generator for uniapp - lets you quickly set up a project with sensible defaults and best practices.

## Usage

Install `yo`, `generator-uniapp`:
```
npm install -g  yo generator-uniapp
// or
yarn add global yo generator-uniapp
```

If you are planning on using Sass, you will need to first install Ruby and Compass:
- Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/) or use Homebrew
- Install the compass gem:
```
gem install compass
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo uniapp`, optionally passing an app name:
```
yo uniapp [app-name]
```

Run `yarn` Installation dependency  and `yarn serve` for preview


## Generators

Available generators:

* [uniapp](#app) (aka [uniapp:app](#app))
* [uniapp:component](#component)
* [uniapp:page](#page)
* [uniapp:service](#service)
* [uniapp:store](#store)
* [uniapp:style](#style)

### App
Sets up a new uniapp project, generating all the boilerplate you need to get started. The app generator also optionally installs dcloudio and additional Vuejs modules, such as vuex (installed by default). and use [flyio](https://github.com/wendux/fly) for request by default

Example:
```bash
yo uniapp
```

### Component
Generates a component.

Example:
```bash
yo uniapp:component MyComponent
```

Produces `src/components/my-component/my-component.vue`:
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
Generates a page and configures a route in `src/pages.json` connecting them.

Example:
```bash
yo uniapp:page my-page
```
Produces `src/pages/my-page/my-page.vue`:
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
**Explicitly provide route**

Example:
```bash
yo uniapp:page my-page --route --title="my page"
```

Produces page as above and adds a route to `src/pages.json`
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

Of course, you can also specify the generated subdirectories.

Example:
```bash
yo uniapp:page user/address --route --title="Address"
```

Produces `src/pages/user/address/address.vue`:
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
Generates a api service file.

Example:
```bash
yo uniapp:service home
```
Produces `src/services/home.js`:
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
Generates a Vuex module file.

Example:
```bash
yo uniapp:store cart
```
Produces `src/store/modules/cart.js`:
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

**You need to manually import this file in the appropriate location of index.js**

### Style
Generates a sass file.

Example:
```bash
yo uniapp:style home
```
Produces `src/styles/home.scss`:
```scss
.home {

}
```
Generate the style described above and add it to `src/styles/app.scss` via @import
```scss
@import "./iconfont";
@import "./global";
@import "./skeleton";
@import "./home"; // add this line
```
## License

[MIT License](http://opensource.org/licenses/bsd-license.php)
