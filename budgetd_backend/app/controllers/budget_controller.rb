class BudgetController < ApplicationController

  before_action :authenticate_user!

  def user_budget
    return current_user.budget.to_json(include: {
        sub_budgets: {
          include: {
            transactions: {
              except: [:updated_at]
            }
          },
          except: [:created_at, :updated_at]
        }
    }, except: [:created_at, :updated_at])
  end

  def index
    render json: user_budget()
  end

  def new_subbudget
    postBody = params[:newSubBudget]
    budget = current_user.budget

    budget.sub_budgets.create({
      name: postBody[:name],
      amount: postBody[:amount],
      originalAmount: postBody[:amount],
    })

    newTotal = budget.total - postBody[:amount]

    Budget.update(budget.id, total: newTotal)

    render json: user_budget()
  end

  def new_transaction
    postBody = params[:newTransaction]
    subBudgetForTransaction = SubBudget.find(params[:id])

    subBudgetForTransaction.transactions.create({
      amount: postBody[:amount],
      location: postBody[:location]
    })

    newAmount = subBudgetForTransaction.amount - postBody[:amount]

    SubBudget.update(subBudgetForTransaction.id, amount: newAmount)

    render json: user_budget()
  end

  def create
    Budget.create({
      user_id: current_user.id,
      total: params[:budget][:total],
      originalTotal: params[:budget][:total]
    })

    render json: user_budget()
  end

  def reset
    SubBudget.all.each { |sub_budget| SubBudget.update(sub_budget.id, {amount: sub_budget.originalAmount}) }
    Transaction.delete_all

    render json: user_budget()
  end

  def index_transactions
    render json: Transaction.where({sub_budget_id: params[:id]})
  end

  def delete_subbudget
    budget = current_user.budget
    subbudget_for_deletion = SubBudget.find(params[:id])
    newTotal = budget.total + subbudget_for_deletion.originalAmount

    Budget.update(budget.id, total: newTotal)

    SubBudget.destroy(params[:id])

    render json: user_budget()
  end

end
