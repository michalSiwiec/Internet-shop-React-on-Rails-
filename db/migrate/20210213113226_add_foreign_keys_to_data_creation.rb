class AddForeignKeysToDataCreation < ActiveRecord::Migration[6.0]
  def change
    add_column :data_creations, :user_id, :integer
    add_column :data_creations, :opinion_id, :integer
    add_column :data_creations, :order_id, :integer
  end
end
