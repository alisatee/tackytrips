class TripsController < ApplicationController
  def index
    trips = Trip.all
    # trips.each do |trip|
    #   trip.get_latlong
    # end
  end

  def get_trip_locations
    trips = Trip.all
    render json: { trips: trips }
  end

end