class CreateSingInData < ActiveRecord::Migration[6.0]
  def change
    create_table :sing_in_data do |t|
      t.string :login
      t.string :password

      t.timestamps
    end
  end
end
