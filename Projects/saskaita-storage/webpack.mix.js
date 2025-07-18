const mix = require('laravel-mix');

mix.js('src/main.js', 'public/app.js')
  .sass('src/style.scss', 'public/style.css')
  .sourceMaps();
