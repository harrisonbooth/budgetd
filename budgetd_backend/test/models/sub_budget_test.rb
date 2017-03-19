require 'test_helper'

class SubBudgetTest < ActiveSupport::TestCase
  test "SubBudget has amount" do
    assert_equal 19.99, subBudgets(:one).amount
  end
end
