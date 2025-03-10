source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.2', '>= 6.1.2.1'
# Use mysql2 as the database for Active Record
gem "mysql2", "0.5.3"
# Use Puma as the app server
gem 'puma', '~> 5.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# APIでcurrent_userを取得するためのJsonWebTokenの発行
gem 'jwt'
# パスワード等をハッシュ化する関数
gem 'bcrypt', '~> 3.1.7'
# テスト用ユーザ等の追加
gem "faker"
# 画像のトリミングに使う
gem 'image_processing'
gem 'mini_magick'
gem "active_storage_validations"
# ログの出力先を標準出力にする
gem 'rails_semantic_logger'
# 画像の保存先をS3に変更
gem "aws-sdk-s3"
# Use Active Storage variant
# gem 'image_processing', '~> 1.2'
# Jsonを加工しやすくする
gem 'active_model_serializers', require: true

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end

group :development do
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# guardの動作にrexmlが必要
gem "rexml"