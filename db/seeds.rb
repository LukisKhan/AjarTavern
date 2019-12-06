# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Restaurant.destroy_all
Booking.destroy_all

User.create(firstname: "tommy", lastname: "deuk", email: "tommy@looksgoodto.me", password: "hunter12");
User.create(firstname: "andy", lastname: "wynhoop", email: "andy@looksgoodto.me", password: "hunter12");
User.create(firstname: "luke", lastname: "pham", email: "luke@looksgoodto.me", password: "hunter12");

rest1 = Restaurant.create(name:"Pho Doan", address:"123 st", phone_num:"555-555", lat: 1.111, lng: 1.222);
file1 = open('https://full-stacks-lp-aa-dev.s3.us-east-2.amazonaws.com/pho_doan.jpeg')
rest1.photo.attach(io: file1, filename: "rest1pic")

rest2 = Restaurant.create(name:"Dong Que", address:"123 st", phone_num:"555-555", lat: 1.111, lng: 1.222);
file2 = open('https://full-stacks-lp-aa-dev.s3.us-east-2.amazonaws.com/dong_que.jpeg')
rest2.photo.attach(io: file2, filename: "rest2pic")

rest3 = Restaurant.create(name:"Nam Hua", address:"123 st", phone_num:"555-555", lat: 1.111, lng: 1.222);
file3 = open('https://full-stacks-lp-aa-dev.s3.us-east-2.amazonaws.com/nam_hua.jpg')
rest3.photo.attach(io: file3, filename: "rest3pic")

rest4 = Restaurant.create(name:"Pho Bang", address:"123 st", phone_num:"555-555", lat: 1.111, lng: 1.222);
file4 = open('https://full-stacks-lp-aa-dev.s3.us-east-2.amazonaws.com/pho_bang.jpeg')
rest4.photo.attach(io: file4, filename: "rest4pic")

Booking.create(user_id: "12", restaurant_id: "6", time: 19, date: 123119, numParty: 2);

# Restaurant.find(Booking.find(1).restaurant_id)
# find the restaurant of the booking_id = 1
# User.find(Booking.find(1).user_id)
# find the user of the booking_id = 1