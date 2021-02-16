Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      get 'products', to: 'products#index'
      get 'products/show', to: 'products#show'
      get 'products/show_selected', to: 'products#show_selected'
      put 'products/remove_product', to: 'products#remove_product'
      put 'products/edit_product', to: 'products#edit_product'
      post 'products/add_product', to: 'products#add_product'

      get 'provinces', to: 'provinces#index'
      get 'provinces/show', to: 'provinces#show'

      get 'cities', to: 'cities#index'
      get 'cities/show', to: 'cities#show'

      post 'users/', to: 'user#create'
      get 'users/logInUser', to: 'user#log_in_user'
      get 'users', to: 'user#index'
      get 'users/:userID', to: 'user#show'
      get 'users/get_last_user', to: 'user#get_last_user'
      put 'users/:userID', to: 'user#update'
      get 'users/get_user_person_data', to: 'user#get_user_person_data'
      delete 'users/:userID', to: 'user#destroy'
      get 'users/get_log_in_users_with_orders', to: 'user#get_log_in_users_with_orders'

      get 'admins/log_in_admin', to: 'admin#log_in_admin'
      get 'admin/get_admin', to: 'admin#get_admin'
      put 'admin/editAdmin', to: 'admin#edit_admin'

      post 'orders/addOrder', to: 'orders#add_order'
      get 'orders/get_user_orders', to: 'orders#get_user_orders'
      get 'orders/get_log_out_users_orders', to: 'orders#get_log_out_users_orders'
      get 'orders/get_order', to: 'orders#get_order'

      get 'opinions/', to: 'opinions#index'
      post 'opinions/add', to: 'opinions#add'

      get 'diagrams/get_sum_orders_associated_with_month', to: 'diagrams#get_sum_orders_associated_with_month'
      get 'diagrams/get_relation_between_opinion_mark', to: 'diagrams#get_relation_between_opinion_mark'
      get 'diagrams/get_general_information', to: 'diagrams#get_general_information'
      get 'diagrams/get_the_most_often_purchased_product', to: 'diagrams#get_the_most_often_purchased_product'
    end
  end

  get '*path', to: 'home#index', via: :all
end
