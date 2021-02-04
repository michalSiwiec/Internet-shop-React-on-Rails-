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
                wholeOrderPrice = params[:wholeOrderPrice]

                if(user_id != 0)
                    Order.create(user_id: user_id)
                else
                    country = params[:country]
                    province = params[:province]
                    city = params[:city]
                    postal_code = params[:postalCode]
                    street = params[:street]
                    house_number = params[:houseNumber]

                    name = params[:name]
                    surname = params[:surname]
                    email = params[:email]
                    phone_number = params[:phoneNumber]

                    order = Order.create()
                    order.create_dataPerson(name: name, surname: surname, email: email, phone_number: phone_number)
                    order.create_deliveryAddress(country: country, province: province, city: city, postal_code: postal_code, street: street, house_number: house_number)
                end
            end
        end
    end
end