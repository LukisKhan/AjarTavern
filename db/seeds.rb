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

User.create(firstname: "tommy", lastname: "deuk", email: "tommy@looksgoodto.me", password: "hunter12");
User.create(firstname: "andy", lastname: "wynhoop", email: "andy@looksgoodto.me", password: "hunter12");
User.create(firstname: "luke", lastname: "pham", email: "luke@looksgoodto.me", password: "hunter12");

rest1 = Restaurant.create(name:"Pho Doan", address:"123 st", phone_num:"555-555", lat: 1.111, lng: 1.222);
file = open('https://full-stacks-lp-aa-dev.s3.us-east-2.amazonaws.com/dong_que.jpeg')
rest1.photo.attach(io: file, filename: "restpic")