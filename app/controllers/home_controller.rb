class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def products
    products = Product.all
    render json: products
  end

  # def product
  #   product = Product.find(params[:id])
  #   render json: {data: product}
  # end

  # def destroy
  #   Product.destroy!(params[:id])
  # end

  # def create
  #   Product.create(source: "source", description: "desc", price: 10.99, key_word: "key")
  # end
end
