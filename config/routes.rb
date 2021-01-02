Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :products
    end
  end

  get '/product', to: 'home#product'

  get '*path', to: 'home#index', via: :all

  # get '/product/:id', to: 'home#product'
  # delete '/destroy/:id', to: 'home#destroy' 
  # post '/create', to: 'home#create'
end
