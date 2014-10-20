var TackyTrips = {}

TackyTrips.Map = function(mapSelector){
  var mapOtions = {
    center: { lat: 37, lng: -122},
    zoom: 8
  }
  this.initialize(mapSelector, mapOtions)
}

TackyTrips.Map.prototype = {
  initialize: function(mapSelector, mapOtions) {
    this.map = new google.maps.Map($(mapSelector)[0], mapOtions);
    this.setUpGeoLocation()
  },
  setUpGeoLocation: function(){
    this.getCenter()
  },
  getCenter: function(){
    this.getGeoLocation().then(function(pos){ this.map.setCenter(pos) }.bind(this))
  },
  getGeoLocation: function(){
    return new Promise(function(success, fail) {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 
        success(pos)
        })
      }
    })
  }
}



$(document).ready(function() {
  new TackyTrips.Map("#map-canvas")
});



