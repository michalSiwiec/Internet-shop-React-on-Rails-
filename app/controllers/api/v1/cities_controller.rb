module Api
    module V1
        class CitiesController < ApplicationController
            def index 
                province = Province.find_by({name: params[:province_name]})
                cities = province.cities

                render json: cities
            end

            def show
                city = City.find_by({name: params[:city_name]})

                postal_code = city.postal_code
                render json: postal_code
            end
        end
    end
end