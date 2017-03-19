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

  test "User has surname" do
    assert_equal "Booth", users(:one).surname
  end

  test "User surname is not hard coded" do
    assert_equal "Middleton", users(:two).surname
  end

  test "User has firstname" do
    assert_equal "Harrison", users(:one).firstname
  end

  test "User firstname is not hardcoded" do
    assert_equal "Lynn", users(:two).firstname
  end
end
