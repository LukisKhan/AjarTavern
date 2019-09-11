class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end
  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end
  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save
      render json {message: "You did it"}
    else
      render json: restaurant.errors.full_messages
    end
  end
  private
  def restaurant_params
    params.require(:restaurant).permit(:name)
  end

end