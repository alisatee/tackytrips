TackyTrips.DirectionController = function(map, pins){
  this.map = map
  this.pins = pins 
  console.log(this.pins)
  this.initialize()

}

TackyTrips.DirectionController.prototype = {
  initialize: function(){
    this.bindFormInputs()
    this.directionsService = new google.maps.DirectionsService()
    var rendererOptions = {
      map: this.map
    }
    this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
    var stepDisplay = new google.maps.InfoWindow()
  },
  bindFormInputs: function(){
    var that = this
    console.log(that)
    $('#direction-form').on("submit", function(ev){
      ev.preventDefault()
      var form = this
      that.processDirections(form).then(function(directionData){that.drawDirectionPath(directionData)})
    })
  },
  processDirections: function(form){
    var directionData = $(form).serializeArray()
    return new Promise(function(success, fail){
      success(directionData)
    })
  },
  drawDirectionPath: function(directionData){
    var destination = directionData[0].value
    var start = directionData[1].value
    var request = {
      origin: start,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    }
    var that = this
    this.directionsService.route(request, function(response, status){
      if (status == google.maps.DirectionsStatus.OK){
        that.directionsDisplay.setDirections(response)
      }
    })
  }

}
