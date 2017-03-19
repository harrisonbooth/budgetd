class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.references :sub_budget, index: true, foreign_key: true
      t.decimal :amount
      t.string :location

      t.timestamps null: false
    end
  end
end
