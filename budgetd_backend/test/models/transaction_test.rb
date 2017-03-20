require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  test "Transaction has a subBudget" do
    assert_equal "Coffee", transactions(:one).sub_budget.name
  end

  test "Transaction subBudget is not hard coded" do
    assert_equal "Food", transactions(:two).sub_budget.name
  end

  test "Transaction has an amount" do
    assert_equal 160, transactions(:one).amount
  end

  test "Transaction amount is not hard coded" do
    assert_equal 3220, transactions(:two).amount
  end

  test "Transaction has a location" do
    assert_equal "Filament", transactions(:one).location
  end

  test "Transaction location is not hard coded" do
    assert_equal "Asda", transactions(:two).location
  end
end
