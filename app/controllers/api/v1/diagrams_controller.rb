module Api
    module V1
        class DiagramsController < ApplicationController
            def index
                render json: [{name: "John"}]
            end
        end
    end
end