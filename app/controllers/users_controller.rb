class UsersController < ApplicationController
  def create
    @user = User.new(user_parmas)
    if @user.save
      login(@user)
      render "users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  private
  def user_parmas
    params.require(:user).permit(:username, :password, :email)
  end
end


