class ChangeTotalAndAmountColumnTypesFromMultipleTables < ActiveRecord::Migration
  def change
    # change_column :table_name, :column_name, :date
    change_column :budgets, :total, :integer
    change_column :budgets, :originalTotal, :integer

    change_column :sub_budgets, :amount, :integer
    change_column :sub_budgets, :originalAmount, :integer
  end
end
