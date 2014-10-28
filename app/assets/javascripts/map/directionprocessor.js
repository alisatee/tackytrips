TackyTrips.DirectionProcessor = function(pins){
  this.pins = pins
}
TackyTrips.DirectionProcessor.prototype = {
  getRelativePins: function(directions){
    var pinsOnPath = []
    var allLatLongs = directions.routes[0].overview_path

    // iterate through longs 
    // long = B 
    // lat = k 
    for (var i = 0; i < allLatLongs.length; i += 10){
      for (var j = 0; j < this.pins.length; j++){
        if (Math.round(this.pins[j].lat) == Math.round(allLatLongs[i].k) &&
            Math.round(this.pins[j].lng) == Math.round(allLatLongs[i].B)){
          pinsOnPath.push(this.pins[j])
        } 
      }
    }

    var pinsToDrop = _.union(pinsOnPath)
    return pinsToDrop
    // this.map.dropAllPins(pinsToDrop)
  }

}


// Pin algorithm? 
// -Collect all the pins in the database 
// -Iterate through all latlongs for long first, match all the pins that have the appropriate/close enough longitude
// -Iterate through all the latlongs for lat - cut the remaining array of the close enough latitudes
// -Display the remaining pins