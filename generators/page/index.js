const _ = require('lodash')
const fs = require('fs')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('pageName', { type: String, required: true })
  }

  writing () {
    let { pageName } = this.options
    pageName = _.kebabCase(pageName)
    this.options.className = pageName
    this.options.componentName = _.upperFirst(_.camelCase(pageName))
    this.fs.copyTpl(
      this.templatePath('page.vue'),
      this.destinationPath(`src/pages/${pageName}/${pageName}.vue`),
      this.options
    )

    if (this.options.route) {
      const file = this.destinationPath('src/pages.json')
      let page = fs.readFileSync(file, 'utf-8')
      if (!page) {
        page = JSON.stringify({
          pages: []
        })
      }
      try {
        page = JSON.parse(page)
        const path = `pages/${pageName}/${pageName}`
        const paths = []
        page.pages.forEach(item => {
          paths.push(item.path)
        })
        if (paths.includes(path)) {
          return this.log.error(`The Path ${path} is already exists`)
        }
        page.pages.push({
          path: `pages/${pageName}/${pageName}`,
          style: {
            navigationBarTitleText: this.options.title ? this.options.title : ''
          }
        })
        console.log(page)
        fs.writeFileSync(file, JSON.stringify(page, null, 2))
      } catch (e) {
        throw e
      }
    }
  }
}
