class SessionsController < ApplicationController
  def new
  end
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render plain: "saved user to databse"
    else
      flash.now[:errors] = ['Invalid username or password']
      render plain: "can't save user to database"
    end
  end
  def destroy
    logout!
    render plain: "logged out"
  end
end
