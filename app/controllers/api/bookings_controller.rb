class Api::BookingsController < ApplicationController
  # before_action :require_logged_in
  def index
    @bookings = Booking.all
  end
  def show
    @booking = Booking.find(params[:id])
  end
  def new
    @booking = Booking.new
  end
  def create
    @booking = Booking.new(booking_parmas)
    @booking.user_id = current_user.id
    if @booking.save
      render "api/bookings/new"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end
  def update
  end
  def edit
    @booking = Booking.find(params[:id])
  end
  def destroy
  end
  private
  def booking_parmas
    params.require(:booking).permit(:user_id, :restaurant_id, :time, :date, :numParty)
  end
end
