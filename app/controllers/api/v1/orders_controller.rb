module Api
    module V1
        class OrdersController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index 

            end

            def show

            end

            def add_order
                user_id = params[:userID]
                productsFromBasket = params[:productsFromBasket]
                order = nil

                if(user_id != 0)
                    order = Order.create(user_id: user_id)
                else
                    order = Order.create()
                    order.create_dataPerson.create(
                        name: params[:name],
                        surname: params[:surname],
                        email: params[:email],
                        phone_number: params[:phone_number]
                    )
                    order.create_deliveryAddress(
                        country: params[:country],
                        province: params[:province],
                        city: params[:city],
                        postal_code: params[:postal_code],
                        street: params[:street],
                        house_number: params[:house_number]
                    )
                end

                productsFromBasket.each do |product|
                    OrdersProduct.create(
                        order_id: order.id,
                        product_id: product[:id],
                        quantity: product[:quantity]
                    )
                end
            end
        end
    end
end