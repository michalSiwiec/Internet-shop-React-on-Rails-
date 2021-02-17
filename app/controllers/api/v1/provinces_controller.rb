module Api
    module V1
        class ProvincesController < ApplicationController
            def index 
                provinces = Province.all
                
                render json: provinces
            end

            def show # It shouldn't be here. I shoud create city controller to return such value
                name = params[:name]
                province = Province.find_by({name: name})

                first_city = City.where({province_id: province.id}).first
                render json: first_city
            end
        end
    end
end