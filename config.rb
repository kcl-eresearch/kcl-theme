# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :syntax
activate :livereload
activate :relative_assets

# Enable cache buster
activate :cache_buster

activate :external_pipeline,
  name: :mix,
  command: build? ? 'npm run production' : 'npm run watch-poll',
  source: ".tmp/dist",
  latency: 1

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

config[:build_dir] = 'public'
config[:js_dir] = 'js'
config[:css_dir] = 'css'
config[:images_dir] = 'images'
