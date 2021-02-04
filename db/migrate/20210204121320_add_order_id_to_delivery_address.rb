class AddOrderIdToDeliveryAddress < ActiveRecord::Migration[6.0]
  def change
    add_column :delivery_addresses, :order_id, :integer
  end
end
