require 'test_helper'

class SubBudgetTest < ActiveSupport::TestCase
  test "SubBudget has amount" do
    assert_equal 19.99, sub_budgets(:one).amount
  end

  test "SubBudget amount is not hard coded" do
    assert_equal 44.21, sub_budgets(:two).amount
  end
end
