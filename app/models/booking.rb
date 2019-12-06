class Booking < ApplicationRecord
  validates :time, 
    :date, 
    :numParty, presence: true

  belongs_to :user
  belongs_to :restaurant
  
end
