require 'test_helper'

class OrderMailerTest < ActionMailer::TestCase
  test "add_order_confirmation" do
    mail = OrderMailer.add_order_confirmation
    assert_equal "Add order confirmation", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
