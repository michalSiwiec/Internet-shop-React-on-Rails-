module Api
    module V1
        class AdminController < ApplicationController
            skip_before_action :verify_authenticity_token

            def log_in_admin
                login = params[:login]
                password = params[:password]

                admin = (
                    Admin.joins(:dataLogin)
                    .select('admins.id')
                    .where('data_logins.login = ? AND data_logins.password = ?', "#{login}", "#{password}")
                )
                
                if admin.present?
                    render json: admin[0]
                else
                    render json: {id: 0}
                end
            end

            def show
                admin = Admin.find(params[:id])

                render json: {
                    login: admin.dataLogin.login,
                    password: admin.dataLogin.password,
                    name: admin.dataPerson.name,
                    surname: admin.dataPerson.surname,
                    email: admin.dataPerson.email,
                    phone_number: admin.dataPerson.phone_number,
                }
            end

            def update
                admin = Admin.find(params[:adminID])
                
                name = params[:newAdminData][:name]
                surname = params[:newAdminData][:surname]
                email = params[:newAdminData][:email]
                phone_number = params[:newAdminData][:phone_number]
                login = params[:newAdminData][:login]
                password = params[:newAdminData][:password]

                

                admin.dataPerson.update_attributes(
                    name: name,
                    surname: surname,
                    email: email,
                    phone_number: phone_number
                )
                admin.dataLogin.update_attributes(
                    login: login,
                    password: password
                )
            end

            private

            def admin_params
                params.require(:deliveryAddress).permit(:country, :province, :city, :postal_code, :street, :house_number)
            end
        end
    end
end