require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  test "Budget has a user" do
    assert_equal "Harrison", budgets(:one).user.firstname
  end

  test "Budget user is not hard coded" do
    assert_equal "Lynn", budgets(:two).user.firstname
  end
end
