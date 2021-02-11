module Api
    module V1
        class OrdersController < ApplicationController
            skip_before_action :verify_authenticity_token

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

                if(user_id != 0)
                    user = User.find(user_id)
                    OrderMailer.add_order_confirmation(user).deliver
                else
                    puts("Sending email on address: #{params[:email]}")
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
                orders_details = []
                orders = Order.where(user_id: nil)

                orders.each do |order|
                    bufor = []
                    order_price = 0
                    orders_products = OrdersProduct.where(order_id: order.id) # Returning all products into order

                    orders_products.each do |order_product| # I need do it because I need to know product price, desc etc not only quantity and id
                        product = Product.find(order_product.product_id)

                        order_price += (product.price * order_product.quantity)
                        
                        bufor.push({
                            product_description: product.description,
                            product_price: product.price,
                            quantity: order_product.quantity
                        })
                    end

                    orders_details.push({
                        dataPerson: order.dataPerson,
                        deliveryAddress: order.deliveryAddress,
                        dataCreated: order.created_at,
                        details: bufor,
                        orderPrice: order_price,
                        orderID: order.id
                    })
                end

                render json: orders_details
            end

            def get_order
                order_id = params[:orderID]

                puts(order_id)

                order = Order.find(order_id)
                data_person = order.dataPerson
                delivery_address = order.deliveryAddress
                whole_price = 0
                products = order.product

                bufor = []

                products.each do |product|
                    quantity_product_into_order = OrdersProduct.find_by(order_id: order_id, product_id: product.id).quantity
                    whole_price += (quantity_product_into_order * product.price)

                    bufor.push({
                        product_description: product.description,
                        product_price: product.price,
                        quantity: quantity_product_into_order
                    })
                end

                render json: {
                    data_person: data_person,
                    delivery_address: delivery_address,
                    order_details: bufor,
                    order_price: whole_price,
                    data_created: order.created_at
                }
            end
        end
    end
end