module Api
    module V1
        class AdminController < ApplicationController
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
        end
    end
end