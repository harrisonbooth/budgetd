class Budget < ActiveRecord::Base
  belongs_to :user
  has_many :sub_budgets
end
