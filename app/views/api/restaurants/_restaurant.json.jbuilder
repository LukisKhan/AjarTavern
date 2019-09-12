json.extract! restaurant, :id, :name, :address, :phone_num, :description, :lat, :lng
json.photoUrl url_for(restaurant.photo)