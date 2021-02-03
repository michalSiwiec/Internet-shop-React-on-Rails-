class RemoveKeyWordFromProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :key_word
  end
end
