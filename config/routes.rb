Rails.application.routes.draw do
  root 'home#index'
  get '*path', to: 'home#index'

  get '/products', to: 'home#products'
  get '/product/:id', to: 'home#product'
  delete '/destroy/:id', to: 'home#destroy' 
  post '/create', to: 'home#create'
end
