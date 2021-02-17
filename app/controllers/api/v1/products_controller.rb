module Api
    module V1
        class ProductsController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index 
                products = Product.all
                render json: products
            end

            def show
                product = Product.find(params[:id])
                render json: product
            end

            def create
                Product.create(product_params)
            end

            def update
                product = Product.find(params[:id])
                product.update_attributes!(product_params)

                products = Product.all
                render json: products.sort_by {|product| product.id}
            end

            def destroy
                product_id = params[:id]
                product = Product.find(product_id)

                product.destroy
                products = Product.all

                render json: products
            end

            def show_selected
                products = JSON.parse(params[:products])
                full_products_from_basket_version = []

                products.each do |product|
                    full_products_from_basket_version.push({
                        product: Product.find(product["id"]),
                        quantity: product["quantity"]
                    })
                end

                render json: full_products_from_basket_version
            end

            private
            
            def product_params
                params.require(:formData).permit(:source, :description, :price, :quantity_available, :product_type)
            end
        end
    end
end