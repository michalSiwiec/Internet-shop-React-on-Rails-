module Api
    module V1
        class ProvincesController < ApplicationController
            def index 
                provinces = Province.all
                render json: provinces
            end
        end
    end
end