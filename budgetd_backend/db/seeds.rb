# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Transaction.delete_all
SubBudget.delete_all
Budget.delete_all
User.delete_all

harrison = User.create({
  email: "harrison@example.com",
  password: "password",
  password_confirmation: "password"
})

lynn = User.create({
  email: "lynn@example.com",
  password: "password",
  password_confirmation: "password"
})

harrison.create_budget({
  total: 30000,
  originalTotal: 30000,
})

lynn.create_budget({
  total: 1299,
  originalTotal: 1299
})

# harrison.budget.sub_budgets.create({
#   amount: 4000,
#   name: "Coffee",
#   originalAmount: 4000
# })
#
# harrison.budget.sub_budgets.create({
#   amount: 10000,
#   name: "Food",
#   originalAmount: 10000
# })

# harrison.budget.sub_budgets[0].transactions.create({
#   amount: 160,
#   location: "Filament"
# })
#
# harrison.budget.sub_budgets[0].transactions.create({
#   amount: 220,
#   location: "Noir"
# })
