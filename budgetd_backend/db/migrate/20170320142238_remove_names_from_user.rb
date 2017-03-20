class RemoveNamesFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :firstname
    remove_column :users, :surname
  end
end
