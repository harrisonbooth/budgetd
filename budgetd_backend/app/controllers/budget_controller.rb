class BudgetController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: current_user.budget.to_json(include: {
        sub_budgets: {
          include: {
            transactions: {
              except: [:created_at, :updated_at]
            }
          },
          except: [:created_at, :updated_at]
        }
    }, except: [:created_at, :updated_at])
  end

  def newSubBudget
    postBody = params[:newSubBudget]

    current_user.budget.sub_budgets.create({
      name: postBody.name,
      amount: postBody.amount,
      originalAmount: postBody.amount,
    })
  end

  def newTransaction
    postBody = params[:newTransaction]
    subBudgetForTransaction = params[:id]

  end

end
