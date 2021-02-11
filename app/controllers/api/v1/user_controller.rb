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

                user = User.create!()
                user.create_dataLogin!(login: login, password: password)
                user.create_deliveryAddress!(country: country, province: province, city: city, postal_code: postal_code, street: street, house_number: house_number)
                user.create_dataPerson!(name: name, surname: surname, email: email, phone_number: phone_number)

                UserMailer.singup_confirmation(user).deliver
            end

            def log_in_user
                login = params[:login]
                password = params[:password]    

                user = User.joins(:dataLogin).where('data_logins.login = ? AND data_logins.password = ?', "#{login}", "#{password}")

                if user.present?
                    render json: {userID: user[0].id}
                else
                    render json: {userID: 0}
                end
            end

            def index
                users = User.all
                users_data = []

                users.each do |user|
                    delivery_address = user.deliveryAddress
                    data_login = user.dataLogin
                    personal_data = user.dataPerson

                    users_data.push({user_id: user.id, user_delivery_addres: delivery_address, data_login: data_login, personal_data: personal_data})
                end

                render json: users_data
            end

            def get_user
                user_id = params[:userID]
                user = User.find(user_id)

                user_delivery_addresses = user.deliveryAddress
                user_data_logins = user.dataLogin
                user_personal_data = user.dataPerson

                user_data = {delivery_addresses: user_delivery_addresses, data_logins: user_data_logins, personal_data: user_personal_data}

                render json: user_data
            end

            def get_last_user
                user = User.last

                # user_delivery_addresses = user.deliveryAddress
                # user_data_logins = user.dataLogin
                # user_personal_data = user.dataPerson

                # user_data = {delivery_addresses: user_delivery_addresses, data_logins: user_data_logins, personal_data: user_personal_data}
                user_data = {user_id: user.id}

                render json: user_data
            end

            def edit_user
                user_id = params[:userID]
                user_data = params[:newClientData]

                user = User.find(user_id)
                
                user.deliveryAddress.update_attributes(
                    country: user_data[:country],
                    province: user_data[:province],
                    city: user_data[:city],
                    postal_code: user_data[:postalCode],
                    street: user_data[:street],
                    house_number: user_data[:houseNumber]
                )
                user.dataLogin.update_attributes(
                    login: user_data[:login],
                    password: user_data[:password]
                )
                user.dataPerson.update_attributes(
                    name: user_data[:name],
                    surname: user_data[:surname],
                    email: user_data[:email],
                    phone_number: user_data[:phoneNumber]
                )   
            end

            def get_user_person_data # I don't need it - to remove
                user_id = params[:userID]
                user_personal_data = DataPerson.find_by(user_id: user_id)
                
                user_person_data = {name: user_personal_data.name, surname: user_personal_data.surname}

                render json: user_person_data
            end

            def remove_user
                user_id = params[:userID]
                user = User.find(user_id)

                user.dataLogin.destroy!
                user.dataPerson.destroy!
                user.deliveryAddress.destroy!
                user.destroy!
            end

            def get_log_in_users_with_orders
                users = []

                User.all.each do |user|
                    users.push({userID: user.id, dataPerson: user.dataPerson}) if(user.order.count > 0)
                end

                render json: users
            end
        end
    end
end