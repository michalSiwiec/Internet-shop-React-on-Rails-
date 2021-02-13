class RemoveTimestampsFromProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :created_at, :string
    remove_column :products, :updated_at, :string
  end
end
