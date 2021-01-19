class AddAdminIdToDataLogins < ActiveRecord::Migration[6.0]
  def change
    add_column :data_logins, :admin_id, :integer
  end
end
