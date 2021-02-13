module Api
    module V1
        class AdminController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index
                 puts('hello')
            end

            def log_in_admin
                login = params[:login]
                password = params[:password]

                admin = (
                    Admin.joins(:dataLogin)
                    .select('admins.id')
                    .where('data_logins.login = ? AND data_logins.password = ?', "#{login}", "#{password}")
                )
                
                if admin.present?
                    render json: admin
                else
                    render json: [{id: 0}]
                end
            end

            def get_admin
                admin_id = params[:adminID]
                admin = Admin.find(admin_id)

                render json: {
                    login: admin.dataLogin.login,
                    password: admin.dataLogin.password,
                    name: admin.dataPerson.name,
                    surname: admin.dataPerson.surname,
                    email: admin.dataPerson.email,
                    phone_number: admin.dataPerson.phone_number,
                }
                # admin = Admin.find(params[:adminID])
                
                # render json: {
                #     dataLogin: admin.dataLogin,
                #     dataperson: admin.dataPerson
                # }
            end

            def edit_admin
                admin_id = params[:adminID]
                
                name = params[:newAdminData][:name]
                surname = params[:newAdminData][:surname]
                email = params[:newAdminData][:email]
                phone_number = params[:newAdminData][:phone_number]
                login = params[:newAdminData][:login]
                password = params[:newAdminData][:password]

                admin = Admin.find(admin_id)

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