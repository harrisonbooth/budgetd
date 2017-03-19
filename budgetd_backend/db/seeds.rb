# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

harrison = User.create({
  firstname: "Harrison",
  surname: "Booth",
  email: "harrison@example.com",
  password: "password",
  password_confirmation: "password"
})

lynn = User.create({
  firstname: "Lynn",
  surname: "Middleton",
  email: "lynn@example.com",
  password: "password",
  password_confirmation: "password"
})

harrison.create_budget({
  total: 10.99,
  originalTotal: 10.99,
})
