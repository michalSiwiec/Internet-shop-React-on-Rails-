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
                    order.create_dataPerson(
                        name: params[:name],
                        surname: params[:surname],
                        email: params[:email],
                        phone_number: params[:phoneNumber]
                    )
                    order.create_deliveryAddress(
                        country: params[:country],
                        province: params[:province],
                        city: params[:city],
                        postal_code: params[:postalCode],
                        street: params[:street],
                        house_number: params[:houseNumber]
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

            def get_user_orders
                user_id = params[:userID]
                orders = User.find(user_id).order

                orders_details = []

                orders.each do |order|
                    orders_products = OrdersProduct.where(order_id: order.id)

                    bufor = []
                    order_price = 0

                    orders_products.each do |order_product|
                        product = Product.find(order_product.product_id)

                        order_price += (product.price * order_product.quantity)

                        bufor.push({
                            product_description: product.description,
                            product_price: product.price,
                            quantity: order_product.quantity
                        })
                    end

                    orders_details.push({details: bufor, orderPrice: order_price, dataCreated: order.created_at})
                end

                render json: orders_details
            end

            def get_log_out_users_orders
                puts('sadasda')

                orders_details = []

                orders = Order.where(user_id: nil)
                # puts(orders.inspect)

                orders.each do |order|
                    # puts(order.dataPerson.inspect)
                    # puts(order.deliveryAddress.inspect)

                    orders_details.push({
                        data_person: order.dataPerson,
                        delivery_address: order.deliveryAddress
                    })
                end

                render json: orders_details
            end
        end
    end
end