require 'test_helper'

class SubBudgetTest < ActiveSupport::TestCase
  test "SubBudget has amount" do
    assert_equal 19.99, sub_budgets(:one).amount
  end

  test "SubBudget amount is not hard coded" do
    assert_equal 44.21, sub_budgets(:two).amount
  end

  test "SubBudget has name" do
    assert_equal "Coffee", sub_budgets(:one).name
  end

  test "SubBudget name is not hard coded" do
    assert_equal "Food", sub_budgets(:two).name
  end

  test "SubBudget has budget, which has user" do
    assert_equal "Harrison", sub_budgets(:one).budget.user.firstname
  end

  test "SubBudget budget (and user) is not hard coded" do
    assert_equal "Lynn", sub_budgets(:two).budget.user.firstname
  end
end
