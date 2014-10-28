class Trip < ActiveRecord::Base
  # before_save :get_latlong, on: :create

  # def get_latlong 
  #   address_query = self.address.gsub(" ", "+")  
  #   response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{address_query}&key=AIzaSyCdtRlRQ6UMONFWUd3ujmxalR_0AlXIE8M")
  #   lat_long = response.parsed_response["results"][0]["geometry"]["location"]
  #   self.update_attributes(lat: lat_long["lat"], lng: lat_long["lng"])
  # end
end