class RemoveTimestampsFromAdmins < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :created_at, :string
    remove_column :admins, :updated_at, :string
  end
end
