class AddLatlongToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :lat, :float
    add_column :trips, :lng, :float
  end
end
