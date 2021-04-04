module Api
    module V1
        class OrdersController < ApplicationController
            skip_before_action :verify_authenticity_token

            def show
                order_id = params[:id]

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

                data_creation = order.dataCreation
                data = "#{data_creation.year}:#{data_creation.month}:#{data_creation.day} #{data_creation.hour}:#{data_creation.minute}:#{data_creation.second}"

                render json: {
                    data_person: data_person,
                    delivery_address: delivery_address,
                    order_details: bufor,
                    order_price: whole_price,
                    data_created: data
                }
            end

            def create
                user_id = params[:userID]
                productsFromBasket = params[:productsFromBasket]
                order = nil

                if(user_id != 0)
                    order = Order.create(user_id: user_id)
                else
                    order = Order.create()

                    order.create_dataPerson(data_person_params)
                    order.create_deliveryAddress(delivery_address_params)
                end

                order.create_dataCreation(creation_time)

                productsFromBasket.each do |product_from_basket|
                    OrdersProduct.create(
                        order_id: order.id,
                        product_id: product_from_basket[:id],
                        quantity: product_from_basket[:quantity]
                    )

                    product = Product.find(product_from_basket[:id]) 
                    product.update_columns(quantity_available: product.quantity_available - product_from_basket[:quantity])
                end

                if(user_id != 0)
                    user = User.find(user_id)
                    # OrderMailer.add_order_confirmation(user).deliver
                else
                    email_data = {
                        email: params[:email],
                        name: params[:name],
                        surname: params[:surname]
                    }
                    
                    # OrderMailer.add_order_log_out_user_confirmation(email_data).deliver
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

                    data_creation = order.dataCreation
                    data = "#{data_creation.year}:#{data_creation.month}:#{data_creation.day} #{data_creation.hour}:#{data_creation.minute}:#{data_creation.second}"
                    
                    orders_details.push({details: bufor, orderPrice: order_price, dataCreated: data})
                end

                render json: orders_details
            end

            # Return orders not associated with any user
            def get_log_out_users_orders
                orders_details = []
                orders = Order.where(user_id: nil)

                orders.each do |order|
                    bufor = []
                    order_price = 0
                    orders_products = OrdersProduct.where(order_id: order.id)

                    # I need do it because I need to know product price, desc etc not only quantity and id
                    orders_products.each do |order_product| 
                        product = Product.find(order_product.product_id)

                        order_price += (product.price * order_product.quantity)
                        
                        bufor.push({
                            product_description: product.description,
                            product_price: product.price,
                            quantity: order_product.quantity
                        })
                    end

                    data_creation = order.dataCreation
                    data = "#{data_creation.year}:#{data_creation.month}:#{data_creation.day} #{data_creation.hour}:#{data_creation.minute}:#{data_creation.second}"

                    orders_details.push({
                        dataPerson: order.dataPerson,
                        deliveryAddress: order.deliveryAddress,
                        dataCreated: data,
                        details: bufor,
                        orderPrice: order_price,
                        orderID: order.id
                    })
                end

                render json: orders_details
            end

            private

            def data_person_params
                params.require(:dataPerson).permit(:name, :surname, :email, :phone_number)
            end

            def delivery_address_params
                params.require(:deliveryAddress).permit(:country, :province, :city, :postal_code, :street, :house_number)
            end

            def creation_time
                time  = Time.new
                {year: time.year, month: time.month, day: time.day, hour: time.hour, minute: time.min, second: time.sec}
            end
        end
    end
end