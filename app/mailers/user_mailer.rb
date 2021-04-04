class UserMailer < ApplicationMailer
  def singup_confirmation(user)
    @user = user

    puts("User into mailer")
    puts(user.inspect)

    mail to: @user.dataPerson.email
  end
end
