# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170319141114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budgets", force: :cascade do |t|
    t.integer  "user_id"
    t.decimal  "total"
    t.decimal  "originalTotal"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "budgets", ["user_id"], name: "index_budgets_on_user_id", using: :btree

  create_table "sub_budgets", force: :cascade do |t|
    t.decimal  "amount"
    t.string   "name"
    t.integer  "budget_id"
    t.decimal  "originalAmount"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "sub_budgets", ["budget_id"], name: "index_sub_budgets_on_budget_id", using: :btree

  create_table "transactions", force: :cascade do |t|
    t.integer  "sub_budget_id"
    t.decimal  "amount"
    t.string   "location"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "transactions", ["sub_budget_id"], name: "index_transactions_on_sub_budget_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "firstname"
    t.string   "surname"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "budgets", "users"
  add_foreign_key "sub_budgets", "budgets"
  add_foreign_key "transactions", "sub_budgets"
end
