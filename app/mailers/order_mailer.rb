class OrderMailer < ApplicationMailer
  def add_order_confirmation(user)
    @user = user
    
    mail to: @user.dataPerson.email, subject: 'Adding new order.'
  end

  def add_order_log_out_user_confirmation(email_data)
    @email_data = email_data
    
    mail to: @email_data[:email], subject: 'Adding new order.'
  end
end
