$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const locationInput = $("#location").val();
    const moneySpentInput = $("#money-spent").val();
    const dateInput = $("#date").val();
    const landmarksInput = $("#landmarks").val();
    const notesInput = $("#notes").val();
    console.log(locationInput)
    console.log(moneySpentInput)
    console.log(dateInput)
    console.log(landmarksInput)
    console.log(notesInput)
  })

})