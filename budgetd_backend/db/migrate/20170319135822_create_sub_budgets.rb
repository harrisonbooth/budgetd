class CreateSubBudgets < ActiveRecord::Migration
  def change
    create_table :sub_budgets do |t|
      t.decimal :amount
      t.string :name
      t.references :budget, index: true, foreign_key: true
      t.decimal :originalAmount

      t.timestamps null: false
    end
  end
end
