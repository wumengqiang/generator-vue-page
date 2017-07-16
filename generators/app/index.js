var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    prompting(){
      return this.prompt([{
        type: 'input',
        name: 'dirname',
        message: 'please input the dir name:',
        default: 'vue-page'
      }]).then((res) => {
        Object.assign(this.options, res);
      })
    }
    writing(){
      console.log(this.options.dirname);
      this.fs.copy(this.templatePath('simple'), this.destinationPath(this.options.dirname));
    }
};
