class RemoveTimestampsFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :created_at, :string
    remove_column :users, :updated_at, :string
  end
end
