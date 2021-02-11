class OrderMailer < ApplicationMailer
  def add_order_confirmation(user)
    @user = user
    
    mail to: @user.dataPerson.email, subject: 'Adding new order.'
  end
end
