Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      # I need define this path before resources - otherwise I'd look for selected product into products#show - it'd be metched to that action
      get "products/show_selected" => "products#show_selected"
      resources :products, only: [:index, :show, :create, :update, :destroy]

      resources :provinces, only: [:index, :show]

      get 'cities', to: 'cities#index' #
      get 'cities/show', to: 'cities#show' #

      get 'user/get_last_user', to: 'user#get_last_user'
      get 'user/get_log_in_users_with_orders', to: 'user#get_log_in_users_with_orders'
      get 'user/logInUser', to: 'user#log_in_user'
      resources :user, only: [:index, :show, :create, :update, :destroy]
      
      get 'admins/log_in_admin', to: 'admin#log_in_admin'
      # get 'admin/get_admin', to: 'admin#get_admin' #
      # put 'admin/editAdmin', to: 'admin#edit_admin' #
      resources :admin, only: [:show, :update]

      get 'orders/get_user_orders', to: 'orders#get_user_orders'
      get 'orders/get_log_out_users_orders', to: 'orders#get_log_out_users_orders'
      resources :orders, only: [:create, :show]     

      resources :opinions, only: [:index, :create]

      get 'diagrams/get_sum_orders_associated_with_month', to: 'diagrams#get_sum_orders_associated_with_month'
      get 'diagrams/get_relation_between_opinion_mark', to: 'diagrams#get_relation_between_opinion_mark'
      get 'diagrams/get_general_information', to: 'diagrams#get_general_information'
      get 'diagrams/get_the_most_often_purchased_product', to: 'diagrams#get_the_most_often_purchased_product'
    end
  end

  # get '*path', to: 'home#index', via: :all
  match '*path', to: 'home#index', via: :all
end
