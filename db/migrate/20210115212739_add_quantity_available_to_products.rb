class AddQuantityAvailableToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :quantity_available, :integer
  end
end
