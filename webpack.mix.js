const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('source/assets/js/app.js', '.tmp/dist/js');
mix.sass('source/assets/sass/app.scss', '.tmp/dist/css');
mix.sass('source/assets/sass/custom.scss', '.tmp/dist/css');
mix.sass('source/assets/sass/custom-wholepage.scss', '.tmp/dist/css');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', '.tmp/dist/fonts');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/sprites', '.tmp/dist/sprites');
mix.copyDirectory('source/assets/fonts', '.tmp/dist/fonts');
mix.copyDirectory('source/assets/images', '.tmp/dist/images');
mix.copyDirectory('source/assets/videos', '.tmp/dist/videos');
