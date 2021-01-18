class CreatePersonalData < ActiveRecord::Migration[6.0]
  def change
    create_table :personal_data do |t|
      t.string :name
      t.string :surname
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
