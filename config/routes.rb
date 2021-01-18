Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      get 'products', to: 'products#index'
      get 'products/show', to: 'products#show'
      get 'products/show_selected', to: 'products#show_selected'

      get 'provinces', to: 'provinces#index'
      get 'provinces/show', to: 'provinces#show'

      get 'cities', to: 'cities#index'
      get 'cities/show', to: 'cities#show'

      post 'addUser', to: 'user#add_user'
    end
  end

  get '*path', to: 'home#index', via: :all
end
