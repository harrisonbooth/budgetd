class User < ActiveRecord::Base
  has_one :budget
  has_many :sub_budgets, through: :budget

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
