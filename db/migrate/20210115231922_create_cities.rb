class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.text :name
      t.integer :province_id

      t.timestamps
    end
  end
end
