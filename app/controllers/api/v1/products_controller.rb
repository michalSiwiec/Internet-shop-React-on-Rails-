module Api
    module V1
        class ProductsController < ApplicationController
            # respond_to :json

            def index 
                products = Product.all
                render json: products
                # respond_to do |format|
                #     format.json { render :json => products }
                # end
            end
        end
    end
end