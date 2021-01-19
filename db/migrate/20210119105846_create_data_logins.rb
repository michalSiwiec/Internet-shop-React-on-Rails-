class CreateDataLogins < ActiveRecord::Migration[6.0]
  def change
    create_table :data_logins do |t|
      t.string :login
      t.string :password
      t.integer :user_id

      t.timestamps
    end
  end
end
