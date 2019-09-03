class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      # render plain: "can't log in"
      render json: ["Incorrect password or username"],status: 401
    end
  end
  def destroy
    logout!
    render plain: "logged out"
  end
end
