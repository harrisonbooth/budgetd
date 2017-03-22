class SubBudget < ActiveRecord::Base
  belongs_to :budget
  has_many :transactions, :dependent => :delete_all
end
