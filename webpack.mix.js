let mix = require('laravel-mix')
let fs = require('fs')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js/field.en')
    .vue({version: 3})
    .css('resources/css/field.css', 'css')
    .nova('mr-vaco/nova-trumbowyg-field')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })
    .disableNotifications()
    .version()

let localeFiles = function (directory) {
    return fs.readdirSync(directory).filter(file => {
        return fs.statSync(`${ directory }/${ file }`).isFile()
    })
}

localeFiles('resources/js/lang').forEach(function (filepath) {
    mix.js(['resources/js/field.js', 'resources/js/lang/' + filepath], 'js/field.' + filepath)
});