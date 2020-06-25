const Generator = require('yeoman-generator')
const fs = require('fs')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('styleName', { type: String, required: true })
  }

  writing () {
    const { styleName } = this.options

    this.fs.copyTpl(
      this.templatePath('style.scss'),
      this.destinationPath(`src/styles/${styleName}.scss`),
      this.options
    )

    const file = this.destinationPath('src/styles/app.scss')
    try {
      let app = fs.readFileSync(file, 'utf-8')
      app += `\n@import "./${styleName}";`
      fs.writeFileSync(file, app)
    } catch (e) {
      console.error(e)
    }
  }
}
