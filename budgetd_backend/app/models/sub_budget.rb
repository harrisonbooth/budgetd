class SubBudget < ActiveRecord::Base
  belongs_to :budget
  has_many :transactions
end
