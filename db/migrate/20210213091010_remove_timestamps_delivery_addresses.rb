class RemoveTimestampsDeliveryAddresses < ActiveRecord::Migration[6.0]
  def change
    remove_column :delivery_addresses, :created_at, :string
    remove_column :delivery_addresses, :updated_at, :string
  end
end
