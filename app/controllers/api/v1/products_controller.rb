module Api
    module V1
        class ProductsController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index 
                products = Product.all
                render json: products
            end

            def show
                product = Product.find(params[:productID])
                render json: product
            end

            def show_selected
                products = JSON.parse(params[:products])
                products_to_render = []

                products.each do |product|
                    # I'm doing it because later I do map on JSON and I need also product.qunatity
                    product_from_db = Product.find(product["id"]).as_json
                    merged = product_from_db.merge(product)

                    products_to_render.push(merged)
                end

                render json: products_to_render
            end

            def remove_product
                product_id = params[:productID]
                product = Product.find(product_id)

                product.destroy
                products = Product.all

                render json: products
            end
        end
    end
end