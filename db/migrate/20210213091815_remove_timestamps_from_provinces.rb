class RemoveTimestampsFromProvinces < ActiveRecord::Migration[6.0]
  def change
    remove_column :provinces, :created_at, :string
    remove_column :provinces, :updated_at, :string
  end
end
