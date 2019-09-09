class AddNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :dining_location, :string
    remove_column :users, :username, :string
  end
end
