class RemoveTimestampsFromOrders < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders, :created_at, :string
    remove_column :orders, :updated_at, :string
  end
end
