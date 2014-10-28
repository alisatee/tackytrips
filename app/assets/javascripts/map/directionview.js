TackyTrips.DirectionView = function(){}
TackyTrips.DirectionView.prototype = {
  renderDirections: function(directions){
    // console.log(directions)
  },
  addSeeDirectionsButton: function(){
    $('.direction-input').append("beep beep! <br><br><a href='#'><h3>Get Directions!</h3></a>")
  }
}