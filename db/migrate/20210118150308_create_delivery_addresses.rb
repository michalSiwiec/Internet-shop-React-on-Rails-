class CreateDeliveryAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :delivery_addresses do |t|
      t.string :country
      t.string :province
      t.string :city
      t.string :postal_code
      t.string :street
      t.integer :house_number

      t.timestamps
    end
  end
end
