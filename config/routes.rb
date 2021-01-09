Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      get 'products', to: 'products#index'
      get 'products/show', to: 'products#show'
      get 'products/show_selected', to: 'products#show_selected'
    end
  end

  get '*path', to: 'home#index', via: :all
end
