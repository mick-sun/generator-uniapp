const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('storeName', { type: String, required: true })
  }

  writing () {
    const { storeName } = this.options

    this.fs.copyTpl(
      this.templatePath('store.js'),
      this.destinationPath(`src/store/modules/${storeName}.js`),
      this.options
    )
  }
}
