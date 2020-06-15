const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('componentName', { type: String, required: true })
  }

  writing () {
    let { componentName } = this.options
    componentName = _.upperFirst(_.camelCase(componentName))
    this.options.className = _.kebabCase(componentName)
    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath(`src/components/${componentName}/${componentName}.vue`),
      this.options
    )
  }
}
