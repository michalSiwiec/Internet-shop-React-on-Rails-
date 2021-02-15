class RemoveTimestampsFromDataCreations < ActiveRecord::Migration[6.0]
  def change
    remove_column :data_creations, :created_at, :string
    remove_column :data_creations, :updated_at, :string
  end
end
