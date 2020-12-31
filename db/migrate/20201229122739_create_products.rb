class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :source
      t.string :description
      t.float :price
      t.string :key_word

      t.timestamps
    end
  end
end
