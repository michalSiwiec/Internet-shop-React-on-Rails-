module Api
    module V1
        class OpinionsController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index 
                opinions = Opinion.all
                opinions_details = []

                opinions.each do |opinion|
                    opinion_owner = User.find(opinion.user_id)
                    name = opinion_owner.dataPerson.name
                    surname = opinion_owner.dataPerson.surname

                    opinions_details.push({name: name, surname: surname, description: opinion.description, mark: opinion.mark, dataCreated: opinion.created_at})
                end

                render json: opinions_details
            end

            def add
                user_id = params[:userID]
                opinion = params[:opinion]
                mark = params[:mark]

                User.find(user_id).opinion.create(description: opinion, mark: mark)
            end
        end
    end
end