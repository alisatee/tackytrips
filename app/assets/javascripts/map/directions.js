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
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
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
    console.log("YOU MADE IT")
    console.log(directionData)
  }

}
