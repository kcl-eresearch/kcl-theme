# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :syntax
activate :livereload
activate :relative_assets

# Enable cache buster
activate :cache_buster

activate :external_pipeline,
  name: :mix,
  command: build? ? 'npm run dev' : 'npm run watch-poll',
  source: ".tmp/dist",
  latency: 1

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

config[:build_dir] = 'public'
config[:js_dir] = 'js'
config[:css_dir] = 'css'
config[:images_dir] = 'images'
