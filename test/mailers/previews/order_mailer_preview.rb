# Preview all emails at http://localhost:3000/rails/mailers/order_mailer
class OrderMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/order_mailer/add_order_confirmation
  def add_order_confirmation
    OrderMailer.add_order_confirmation
  end

end
