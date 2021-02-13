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

                    data_creation = opinion.dataCreation
                    data = "#{data_creation.year}:#{data_creation.month}:#{data_creation.day} #{data_creation.hour}:#{data_creation.minute}:#{data_creation.second}"

                    opinions_details.push({name: name, surname: surname, description: opinion.description, mark: opinion.mark, dataCreated: data})
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