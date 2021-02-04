class AddOrderIdToDataPerson < ActiveRecord::Migration[6.0]
  def change
    add_column :data_people, :order_id, :integer
  end
end
