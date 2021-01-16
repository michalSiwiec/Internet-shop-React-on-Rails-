class AddPostalCodeToCity < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :postal_code, :string
  end
end
