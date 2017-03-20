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

  test "User has password" do
    assert_equal "password", users(:one).encrypted_password
  end

  test "User password is not hard coded" do
    assert_equal "password1", users(:two).encrypted_password
  end
end
