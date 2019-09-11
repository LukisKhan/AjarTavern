class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone_num, null: false
      t.string :description
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :restaurants, :name
  end
end
