var TackyTrips = {}

TackyTrips.Map = function(mapSelector){
  var mapOtions = {
    center: { lat: 37, lng: -122},
    zoom: 4
  }
  this.initialize(mapSelector, mapOtions)
  this.getAllPinLocations()
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
  },
  getAllPinLocations: function(){
    $.ajax({
      url: '/trips',
    }).done(this.dropAPin.bind(this))
  },
  dropAPin: function(allPins){
    for (var i = 0; i < allPins.trips.length; i++){
      var latLong = new google.maps.LatLng(allPins.trips[i].lat, allPins.trips[i].lng)
      var marker = new google.maps.Marker({
        position: latLong,
        map: this.map 
      })
   }
  }
}



$(document).ready(function() {
  new TackyTrips.Map("#map-canvas")
});



