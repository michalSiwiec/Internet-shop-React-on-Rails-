class RemoveTimestampsFromDataPeople < ActiveRecord::Migration[6.0]
  def change
    remove_column :data_people, :created_at, :string
    remove_column :data_people, :updated_at, :string
  end
end
