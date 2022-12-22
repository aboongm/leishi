# Be sure to restart your server when you modify this file.
# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins '*'
    origins 'http://localhost:3001', '127.0.0.1:3001'
    # origins 'https://monaaz.onrender.com/'
    # origins 'https://monaaz-8zab.onrender.com'

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true,
      expose: [ "Authorization"]
  end
end
