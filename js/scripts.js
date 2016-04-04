function Place (location, landmarks, time, notes){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = time;
  this.notes = notes;
};

var newPlace= {};

$("form").submit(function(event) {
  event.preventDefault();

  var location = $("#location").val();
  var landmarks = $("#landmarks").val();
  var date = $("#date").val();
  var notes = $("#notes").val();
  newPlace = new Place (location, landmarks, date, notes);

  $("#locationResult").empty().append('<li> Place Visited: <span id="locationName">' + newPlace.location + '</span></li>')


});

$('#locationResult').click(function(){
  $('#locationData').empty().append('<li> Landmarks Visited: ' + newPlace.landmarks + '</li><li>'+ newPlace.date + '</li><li>'+ newPlace.notes + '</li>');
});
