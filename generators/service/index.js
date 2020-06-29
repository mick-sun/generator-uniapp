const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('serviceName', { type: String, required: true })
  }

  writing () {
    const { serviceName } = this.options

    this.fs.copyTpl(
      this.templatePath('store.js'),
      this.destinationPath(`src/services/${serviceName}.js`),
      this.options
    )
  }
}
