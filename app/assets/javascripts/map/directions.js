TackyTrips.DirectionController = function(map, pins, mapController){
  this.map = map
  this.mapController = mapController
  this.pins = pins 
  this.directionView = new TackyTrips.DirectionView
  this.directionProcessor = new TackyTrips.DirectionProcessor(this.pins, this.map)
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
        that.writtenDirectionsProcess(response)
      }
    })
    this.directionView.addSeeDirectionsButton()
  },
  writtenDirectionsProcess: function(directions){
    // console.log(directions.routes[0].legs[0])
    var pinsToRender = this.directionProcessor.getRelativePins(directions)
    this.mapController.dropAllPins(pinsToRender)
    this.directionView.renderDirections(directions.routes[0].legs[0])
  }

}
