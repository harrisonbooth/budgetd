require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  test "Transaction has a subBudget" do
    assert_equal "Coffee", transactions(:one).sub_budget.name
  end

  test "Transaction subBudget is not hard coded" do
    assert_equal "Food", transactions(:two).sub_budget.name
  end
end
