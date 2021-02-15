module Api
    module V1
        class DiagramsController < ApplicationController
            def get_sum_orders_associated_with_month # I don't want here average, I want twelwe separate data to present it into diagrams
                months = ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"]
                sales_details = []

                12.times do |i|
                    whole_month_price = 0
                    orders_from_month = Order.joins(:dataCreation).where("month = #{i}")

                    orders_from_month.each do |order_from_month|
                        order_from_month.product.each do |product|
                            product_price = product.price
                            quantity_product = OrdersProduct.where(order_id: order_from_month.id).find_by(product_id: product.id).quantity

                            whole_month_price += quantity_product * product_price
                        end
                    end

                    sales_details.push({
                        month: months[i],
                        wholeMonthPrice: whole_month_price
                    })
                end

                render json: sales_details
            end

            def get_relation_between_opinion_mark
                marks_quantity = Opinion.count.to_f
                mark1_quantity = Opinion.where(mark: 1).count
                mark2_quantity = Opinion.where(mark: 2).count
                mark3_quantity = Opinion.where(mark: 3).count
                mark4_quantity = Opinion.where(mark: 4).count
                mark5_quantity = Opinion.where(mark: 5).count

                render json: {
                    mark1PercentPart: (mark1_quantity / marks_quantity) * 100,
                    mark2PercentPart: (mark2_quantity / marks_quantity) * 100,
                    mark3PercentPart: (mark3_quantity / marks_quantity) * 100,
                    mark4PercentPart: (mark4_quantity / marks_quantity) * 100,
                    mark5PercentPart: (mark5_quantity / marks_quantity) * 100
                }
            end

            def get_general_information
                average_quantity_orders_on_mont = get_orders_per_month()
                orders_average_price = get_orders_average_price()
                the_most_often_buyed_product = get_the_most_often_buyed_product()

                render json: {
                    averageQuantityOrdersOnMont: average_quantity_orders_on_mont,
                    averageOrderPrice: orders_average_price,
                    theMostOftenBuyedProduct: the_most_often_buyed_product
                }
            end

            private
            
            def get_orders_per_month
                orders = Order.all

                quantity_orders = orders.count
                average_quantity_orders_on_mont = quantity_orders / 12.0
            end

            def get_orders_average_price
                orders = Order.all
                orders_prices = []
                
                orders.each do |order|
                    order_price = 0 

                    order.product.each do |product|
                        product_price = product.price
                        quantity_product = OrdersProduct.where(order_id: order.id).find_by(product_id: product.id).quantity

                        order_price += product_price * quantity_product
                    end

                    orders_prices.push(order_price)
                end

                orders_average_price = orders_prices.sum / (orders_prices.count + 1)
            end

            def get_the_most_often_buyed_product
                orders = Order.all
                array_of_hashes = []

                orders.each do |order|
                    puts("Order")
                    order.product.each do |product|
                        quantity_product = OrdersProduct.where(order_id: order.id).find_by(product_id: product.id).quantity

                        # looking for element into hash if exist I make bigger his quantity otherwise I add it
                        element = array_of_hashes.detect {  |h| h[:product_id] == product.id }

                        if(element) 
                            element[:quantity_product] += quantity_product
                        else
                            array_of_hashes.push({
                                product_id: product.id,
                                quantity_product: quantity_product
                            })
                        end
                    end
                end

                product_id_with_the_biggest_quantity = array_of_hashes.sort_by{|k| k[:quantity_product]}.last
                the_most_often_buyed_product = Product.find(product_id_with_the_biggest_quantity[:product_id])
            end
        end
    end
end