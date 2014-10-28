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
    this.pins = []
    this.directionController = new TackyTrips.DirectionController(this.map, this.pins)
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
    }).done(this.processPins.bind(this))
  },
  processPins: function(allPins){
    for (var i = 0; i < allPins.trips.length; i++){
      this.createAPin(allPins.trips[i]).then(function(pin){this.dropAPin(pin)}.bind(this))
    }
  },
  createAPin: function(pin){
    return new Promise(function(success,fail){
      pin = new TackyTrips.Pin(pin)
      success(pin)
    })
  },
  dropAPin: function(pin){
    this.pins.push(pin)
      var latLong = new google.maps.LatLng(pin.lat, pin.lng)
      var marker = new google.maps.Marker({
        position: latLong,
        map: this.map 
      })
    this.bindInfoMessageContent(marker, pin)
  },
  bindInfoMessageContent: function(marker, pin){
    var infowindow = new google.maps.InfoWindow({
      content: Mustache.render(TackyTrips.Templates.infoWindow, {pin: pin})
    })
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(marker.get('map'), marker);
    });
  }
}





