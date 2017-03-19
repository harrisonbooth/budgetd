require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  test "Budget has a user" do
    assert_equal "Harrison", budgets(:one).user.firstname
  end
end
