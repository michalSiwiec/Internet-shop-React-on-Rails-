module Api
    module V1
        class UserController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index
                users = User.all
                users_data = []

                users.each do |user|
                    users_data.push({
                        userID: user.id,
                        deliveryAddres: user.deliveryAddress,
                        dataLogin: user.dataLogin,
                        personalData: user.dataPerson
                    })
                end

                render json: users_data
            end

            def show
                user = User.find(params[:userID])

                user_data = {
                    deliveryAddresses: user.deliveryAddress,
                    dataLogins: user.dataLogin,
                    personalData: user.dataPerson
                }

                render json: user_data
            end

            def create
                user = User.create!()
                
                user.create_dataLogin!(user_data_log_in_params)
                user.create_deliveryAddress!(user_delivery_address_params)
                user.create_dataPerson!(user_data_person_params)
                user.create_dataCreation!(creation_time)

                # UserMailer.singup_confirmation(user).deliver
            end

            def update
                user = User.find(params[:userID])

                user.dataLogin.update_attributes!(user_data_log_in_params)
                user.dataPerson.update_attributes!(user_data_person_params)
                user.deliveryAddress.update_attributes!(user_delivery_address_params)
            end

            def destroy
                user = User.find(params[:userID])

                user.dataLogin.destroy!
                user.dataPerson.destroy!
                user.deliveryAddress.destroy!
                user.destroy!
            end

             # I use this controller to return user's id after register - user is log in after creating account
            def get_last_user
                user = User.last
                user_data = {user_id: user.id}

                render json: user_data
            end

            # I use this to return all users which has at least one order - Neccesary into Admin Panel
            def get_log_in_users_with_orders
                users = []

                User.all.each do |user|
                    users.push({userID: user.id, dataPerson: user.dataPerson}) if(user.order.count > 0)
                end

                render json: users
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