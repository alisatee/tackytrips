class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name 
      t.string :address
      t.string :description
      t.timestamps
    end
  end
end
