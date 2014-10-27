TackyTrips.Pin = function(pin){
  this.name = pin.name
  this.lat = pin.lat
  this.lng = pin.lng

  this.initialize()
}

TackyTrips.Pin.prototype = {
  initialize: function(){
  }
}