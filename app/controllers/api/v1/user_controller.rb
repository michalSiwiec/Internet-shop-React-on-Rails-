module Api
    module V1
        class UserController < ApplicationController
            skip_before_action :verify_authenticity_token

            def add_user
                login = params[:login]
                password = params[:password]

                name = params[:name]
                surname = params[:surname]
                email = params[:email]
                phone_number = params[:phone_number]

                country = params[:country]
                province = params[:province]
                city = params[:city]
                postal_code = params[:postal_code]
                street = params[:street]
                house_number = params[:house_number]

                user = User.create()
                DataLogin.create(login: login, password: password, user_id: user.id)
                DataPerson.create(name: name, surname: surname, email: email, phone_number: phone_number, user_id: user.id)
                DeliveryAddress.create(country: country, province: province, city: city, postal_code: postal_code, street: street, house_number: house_number, user_id: user.id)
            end

            def log_in_user
                login = params[:login]
                password = params[:password]    

                user = User.joins(:dataLogin).where('data_logins.login = ? AND data_logins.password = ?', "#{login}", "#{password}")

                if user.present?
                    render json: user
                else
                    render json: {info: 'User with such data doesnt exist'}
                end
            end

            def all_users
                users = User.all
                users_data = []

                users.each do |user|
                    user_delivery_addresses = DeliveryAddress.where(user_id: user.id)
                    user_data_logins = DataLogin.where(user_id: user.id)
                    user_personal_data = DataPerson.where(user_id: user.id)

                    users_data.push({user_id: user.id, user_delivery_addres: user_delivery_addresses, data_login: user_data_logins, personal_data: user_personal_data})
                end

                render json: users_data
            end

            def get_user
                user_id = params[:userID]

                user_delivery_addresses = DeliveryAddress.where(user_id: user_id)
                user_data_logins = DataLogin.where(user_id: user_id)
                user_personal_data = DataPerson.where(user_id: user_id)

                user_data = {delivery_addresses: user_delivery_addresses, data_logins: user_data_logins, personal_data: user_personal_data}

                render json: user_data
            end

            def edit_user
                user_id = params[:userID]
                user_data = params[:newClientData]

                user_delivery_addresses = DeliveryAddress.find_by(user_id: user_id)
                user_data_logins = DataLogin.find_by(user_id: user_id)
                user_personal_data = DataPerson.find_by(user_id: user_id)

                user_delivery_addresses.update_attributes(
                    country: user_data[:country],
                    province: user_data[:province],
                    city: user_data[:city],
                    postal_code: user_data[:postalCode],
                    street: user_data[:street],
                    house_number: user_data[:houseNumber]
                )

                user_data_logins.update_attributes(
                    login: user_data[:login],
                    password: user_data[:password]
                )

                user_personal_data.update_attributes(
                    name: user_data[:name],
                    surname: user_data[:surname],
                    email: user_data[:email],
                    phone_number: user_data[:phoneNumber],
                )     
            end
        end
    end
end