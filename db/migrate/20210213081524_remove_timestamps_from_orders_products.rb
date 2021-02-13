class RemoveTimestampsFromOrdersProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders_products, :created_at, :string
    remove_column :orders_products, :updated_at, :string
  end
end
