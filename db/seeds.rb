class Text_Parser
  def self.parse_text_file(filename)
    File.open(filename).each_line do |line|
      if line != "\n"
      Database_Seeder.seed_db_with_trip(line.split(","))
      end
    end
  end
end

class Database_Seeder
  def self.seed_db_with_trip(trip)
    Trip.create(name: trip[0], address: trip[1], website: trip[2], description: trip[3], lat: trip[4], lng: trip[5])
  end


end

Trip.delete_all
Text_Parser.parse_text_file("tackytripdestinations.csv")