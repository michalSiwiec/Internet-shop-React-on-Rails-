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
        end
    end
end