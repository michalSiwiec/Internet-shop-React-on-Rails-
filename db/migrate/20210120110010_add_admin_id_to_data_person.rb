class AddAdminIdToDataPerson < ActiveRecord::Migration[6.0]
  def change
    add_column :data_people, :admin_id, :integer
  end
end
