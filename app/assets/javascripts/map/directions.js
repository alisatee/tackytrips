TackyTrips.DirectionController = function(map, pins){
  this.map = map
  this.pins = pins 
  console.log(pins)
  this.initialize()

}

TackyTrips.DirectionController.prototype = {
  initialize: function(){
    console.log("womp womp")
    this.directionsService = new google.maps.DirectionsService()
    var rendererOptions = {
      map: this.map
    }
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
    var stepDisplay = new google.maps.InfoWindow()
  }

}
