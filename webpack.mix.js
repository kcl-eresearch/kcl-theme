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

mix.js('assets/js/app.js', 'dist/js');
mix.sass('assets/sass/app.scss', 'dist/css');
mix.copyDirectory('assets/fonts', 'dist/fonts');
mix.copyDirectory('assets/images', 'dist/images');
mix.copyDirectory('assets/videos', 'dist/videos');
