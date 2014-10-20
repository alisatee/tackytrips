var TackyTrips = {}

TackyTrips.Map = function(mapSelector){
  var mapOtions = {
    center: { lat: 37, lng: -122},
    zoom: 8
  }
  console.log(mapSelector)
  console.log(mapOtions)
  this.initialize(mapSelector, mapOtions)
}

TackyTrips.Map.prototype = {
  initialize: function(mapSelector, mapOtions) {
    console.log($(mapSelector)[0])
    this.map = new google.maps.Map($(mapSelector)[0], mapOtions);
  }
}


$(document).ready(function() {
  new TackyTrips.Map("#map-canvas")
});



