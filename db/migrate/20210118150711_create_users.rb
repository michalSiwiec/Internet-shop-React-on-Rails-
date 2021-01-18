class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.integer :sing_in_data
      t.integer :personal_data
      t.integer :delivery_address

      t.timestamps
    end
  end
end
