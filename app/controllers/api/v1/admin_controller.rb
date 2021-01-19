module Api
    module V1
        class AdminController < ApplicationController
            def index
                 puts('hello')
            end

            def log_in_admin
                login = params[:login]
                password = params[:password]

                puts(login)
                puts(password)

                admin = Admin.joins(:dataLogin).where('data_logins.login = ? AND data_logins.password = ?', "#{login}", "#{password}")

                if admin.present?
                    render json: admin
                else
                    render json: {info: 'Admin with such data doesnt exist'}
                end
            end
        end
    end
end