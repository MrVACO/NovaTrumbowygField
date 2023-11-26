let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js(['resources/js/field.js', 'resources/js/lang/ru.js'], 'js')
    .vue({version: 3})
    .css('resources/css/field.css', 'css')
    .nova('mr-vaco/nova-trumbowyg-field')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })
    .disableNotifications()
    .version()
