module Api
    module V1
        class CitiesController < ApplicationController
            def index 
                # puts(params[:province_name])
                province_name = params[:province_name]
                province = Province.find_by({name: province_name})

                cities = City.where({province_id: province.id})
                render json: cities
            end

            def show
                city_name = params[:city_name]
                city = City.find_by({name: city_name})

                postal_code = city.postal_code
                render json: postal_code
            end
        end
    end
end