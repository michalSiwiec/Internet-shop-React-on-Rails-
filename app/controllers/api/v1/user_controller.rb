module Api
    module V1
        class UserController < ApplicationController
            skip_before_action :verify_authenticity_token

            def add_user
                user = User.create!()
                
                user.create_dataLogin!(user_data_log_in_params)
                user.create_deliveryAddress!(user_delivery_address_params)
                user.create_dataPerson!(user_data_person_params)
                user.create_dataCreation!(creation_time)

                # UserMailer.singup_confirmation(user).deliver
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
                user = User.find(params[:userID])

                user.dataLogin.update_attributes!(user_data_log_in_params)
                user.dataPerson.update_attributes!(user_data_person_params)
                user.deliveryAddress.update_attributes!(user_delivery_address_params)
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

            private

            def user_data_log_in_params
                params.require(:dataLogin).permit(:login, :password)
            end

            def user_data_person_params
                params.require(:dataPerson).permit(:name, :surname, :email, :phone_number)
            end

            def user_delivery_address_params
                params.require(:deliveryAddress).permit(:country, :province, :city, :postal_code, :street, :house_number)
            end

            def creation_time
                time  = Time.new
                {year: time.year, month: time.month, day: time.day, hour: time.hour, minute: time.min, second: time.sec}
            end
        end
    end
end