class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.singup_confirmation.subject
  #
  def singup_confirmation(user)
    @user = user

    mail to: @user.dataPerson.email
  end
end
