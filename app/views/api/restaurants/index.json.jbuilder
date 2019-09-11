json.array! @restaurants do |restaurant|
  json.extract! restaurant, :id, :name
  json.photoUrl url_for(restaurant.photo)
end