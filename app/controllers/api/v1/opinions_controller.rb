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

            def create
                opinion = Opinion.create!(opinion_params)
                opinion.create_dataCreation!(creation_time)
            end

            private 

            def opinion_params
                params.require(:opinionDetails).permit(:description, :mark, :user_id)
            end

            def creation_time
                time  = Time.new
                {year: time.year, month: time.month, day: time.day, hour: time.hour, minute: time.min, second: time.sec}
            end
        end
    end
end