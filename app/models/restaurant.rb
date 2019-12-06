class Restaurant < ApplicationRecord
  validates :name, 
    :address, 
    :phone_num, 
    :lat, 
    :lng, presence: true

  has_one_attached :photo
  has_many :bookings
end