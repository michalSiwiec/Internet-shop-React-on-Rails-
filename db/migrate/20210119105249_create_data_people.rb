class CreateDataPeople < ActiveRecord::Migration[6.0]
  def change
    create_table :data_people do |t|
      t.string :name
      t.string :surname
      t.string :email
      t.string :phone_number
      t.integer :user_id

      t.timestamps
    end
  end
end
