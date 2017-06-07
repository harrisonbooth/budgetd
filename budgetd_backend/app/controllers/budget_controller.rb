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
    post_body = params[:newSubBudget]
    budget = current_user.budget

    budget.sub_budgets.create({
      name: post_body[:name],
      amount: post_body[:amount],
      originalAmount: post_body[:amount],
    })

    new_total = budget.total - post_body[:amount]

    if new_total < 0
      new_total = 0
    end

    Budget.update(budget.id, total: new_total)

    render json: user_budget()
  end

  def new_transaction
    post_body = params[:newTransaction]
    sub_budget_for_transaction = SubBudget.find(params[:id])

    sub_budget_for_transaction.transactions.create({
      amount: post_body[:amount],
      location: post_body[:location]
    })

    new_amount = sub_budget_for_transaction.amount - post_body[:amount]

    SubBudget.update(sub_budget_for_transaction.id, amount: new_amount)

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
    new_total = budget.total + subbudget_for_deletion.originalAmount

    if new_total > budget.originalTotal
      new_total = budget.originalTotal
    end

    Budget.update(budget.id, total: new_total)

    SubBudget.destroy(params[:id])

    render json: user_budget()
  end

end
