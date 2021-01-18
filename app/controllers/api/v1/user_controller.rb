module Api
    module V1
        class UserController < ApplicationController
            skip_before_action :verify_authenticity_token

            def add_user
                login = params[:login]
                password = params[:password]

                name = params[:name]
                surname = params[:surname]
                email = params[:email]
                phone_number = params[:phone_number]

                country = params[:country]
                province = params[:province]
                city = params[:city]
                postal_code = params[:postal_code]
                street = params[:street]
                house_number = params[:house_number]

                SingInDatum.create(login: login, password: password)
                PersonalDatum.create(name: name, surname: surname, email: email, phone_number: phone_number)
                DeliveryAddress.create(country: country, province: province, city: city, postal_code: postal_code, street: street, house_number: house_number)

                singInDataLastRecordID = SingInDatum.last.id
                personalDatumLastRecordID = PersonalDatum.last.id
                deliveryAddressLastRecordID = DeliveryAddress.last.id

                User.create(sing_in_data: singInDataLastRecordID, personal_data: personalDatumLastRecordID, delivery_address: deliveryAddressLastRecordID)
            end
        end
    end
end