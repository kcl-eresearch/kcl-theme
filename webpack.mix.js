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

mix.js('assets/js/app.js', 'public/js');
mix.sass('assets/sass/themes/fresh/fresh.scss', 'public/css');
mix.sass('assets/sass/themes/sandstone/sandstone.scss', 'public/css');
mix.sass('assets/sass/app.scss', 'public/css');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/fonts');
mix.copyDirectory('assets/fonts', 'public/fonts');
mix.copyDirectory('assets/images', 'public/images');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/sprites', 'public/sprites');
mix.copyDirectory('assets/videos', 'public/videos');
