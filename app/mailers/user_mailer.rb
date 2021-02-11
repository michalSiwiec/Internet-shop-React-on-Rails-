class UserMailer < ApplicationMailer
  def singup_confirmation(user)
    @user = user

    mail to: @user.dataPerson.email
  end
end
