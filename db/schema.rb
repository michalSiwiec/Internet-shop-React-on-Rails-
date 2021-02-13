# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_13_113226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
  end

  create_table "cities", force: :cascade do |t|
    t.text "name"
    t.integer "province_id"
    t.string "postal_code"
  end

  create_table "data_createds", force: :cascade do |t|
    t.integer "year"
    t.integer "month"
    t.integer "day"
    t.integer "hour"
    t.integer "min"
    t.integer "sec"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "data_creations", force: :cascade do |t|
    t.integer "year"
    t.integer "month"
    t.integer "day"
    t.integer "hour"
    t.integer "minute"
    t.integer "second"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "opinion_id"
    t.integer "order_id"
  end

  create_table "data_logins", force: :cascade do |t|
    t.string "login"
    t.string "password"
    t.integer "user_id"
    t.integer "admin_id"
  end

  create_table "data_people", force: :cascade do |t|
    t.string "name"
    t.string "surname"
    t.string "email"
    t.string "phone_number"
    t.integer "user_id"
    t.integer "admin_id"
    t.integer "order_id"
  end

  create_table "delivery_addresses", force: :cascade do |t|
    t.string "country"
    t.string "province"
    t.string "city"
    t.string "postal_code"
    t.string "street"
    t.integer "house_number"
    t.integer "user_id"
    t.integer "order_id"
  end

  create_table "opinions", force: :cascade do |t|
    t.integer "user_id"
    t.text "description"
    t.integer "mark"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
  end

  create_table "orders_products", force: :cascade do |t|
    t.integer "order_id"
    t.integer "product_id"
    t.integer "quantity"
  end

  create_table "products", force: :cascade do |t|
    t.string "source"
    t.string "description"
    t.float "price"
    t.string "product_type"
    t.integer "quantity_available"
  end

  create_table "provinces", force: :cascade do |t|
    t.text "name"
  end

  create_table "users", force: :cascade do |t|
  end

end
