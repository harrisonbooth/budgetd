require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  test "Budget has a user" do
    assert_equal "Harrison", budgets(:one).user.firstname
  end

  test "Budget user is not hard coded" do
    assert_equal "Lynn", budgets(:two).user.firstname
  end

  test "Budget has total" do
    assert_equal 798, budgets(:one).total
  end

  test "Budget total is not hard coded" do
    assert_equal 510, budgets(:two).total
  end

  test "Budget has original total" do
    assert_equal 999, budgets(:one).originalTotal
  end

  test "Budget original total is not hard coded" do
    assert_equal 1093, budgets(:two).originalTotal
  end
end
