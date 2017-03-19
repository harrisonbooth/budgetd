require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "User has an email" do
    assert_equal "one@example.com", users(:one).email
  end

  test "User email is not hard coded" do
    assert_equal "two@example.com", users(:two).email
  end
end
