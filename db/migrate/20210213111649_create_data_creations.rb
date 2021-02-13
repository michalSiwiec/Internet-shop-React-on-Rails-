class CreateDataCreations < ActiveRecord::Migration[6.0]
  def change
    create_table :data_creations do |t|
      t.integer :year
      t.integer :month
      t.integer :day
      t.integer :hour
      t.integer :minute
      t.integer :second

      t.timestamps
    end
  end
end
