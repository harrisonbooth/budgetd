class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.references :user, index: true, foreign_key: true
      t.decimal :total
      t.decimal :originalTotal

      t.timestamps null: false
    end
  end
end
