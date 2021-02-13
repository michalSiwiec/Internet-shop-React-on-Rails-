class RemoveTimestampsFromDataLogins < ActiveRecord::Migration[6.0]
  def change
    remove_column :data_logins, :created_at, :string
    remove_column :data_logins, :updated_at, :string
  end
end
