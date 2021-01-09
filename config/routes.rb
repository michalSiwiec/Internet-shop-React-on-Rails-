Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      get 'products', to: 'products#index'
      get 'products/showw', to: 'products#showw'
    end
  end

  get '*path', to: 'home#index', via: :all
end
