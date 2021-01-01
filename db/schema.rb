ActiveRecord::Schema.define(version: 2021_01_01_091211) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string "source"
    t.string "description"
    t.float "price"
    t.string "key_word"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "product_type"
  end

end
