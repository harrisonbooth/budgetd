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
  total: 3000,
  originalTotal: 10099,
})

lynn.create_budget({
  total: 999,
  originalTotal: 1299
})

harrison.budget.sub_budgets.create({
  amount: 1099,
  name: "Coffee",
  originalAmount: 1900
})

harrison.budget.sub_budgets.create({
  amount: 7899,
  name: "Food",
  originalAmount: 10000
})

harrison.sub_budgets[0].transactions.create({
  amount: 160,
  location: "Filament"
})

harrison.sub_budgets[0].transactions.create({
  amount: 220,
  location: "Noir"
})
