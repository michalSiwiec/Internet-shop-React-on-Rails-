module Api
    module V1
        class ProductsController < ApplicationController
            def index 
                products = Product.all
                render json: products
            end

            def showw
                product = Product.find(params[:productID])
                render json: product
            end
        end
    end
end