class RemoveTimestampsFromOpinions < ActiveRecord::Migration[6.0]
  def change
    remove_column :opinions, :created_at, :string
    remove_column :opinions, :updated_at, :string
  end
end
