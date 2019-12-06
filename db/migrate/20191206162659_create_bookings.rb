class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :time
      t.integer :date
      t.integer :numParty
    end
    add_index :bookings, :user_id
    add_index :bookings, :restaurant_id
  end
end