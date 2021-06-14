function Travelogue () {
  this.places = []
}

Travelogue.prototype.addPlace = function (placeData) {
  const location = placeData.location
  const moneySpent = placeData.moneySpent
  const timeOfYear = placeData.timeOfYear
  const landmarks = placeData.landmarks
  const notes = placeData.notes

  this.places.push({
    location,
    moneySpent,
    timeOfYear,
    landmarks,
    notes,
  })
}
//Get today's date 
//Format it to compare with another date
function timeComparison(anotherDate){
  let todayDate = new Date()
  let todayYear = todayDate.getFullYear()
  let year = new Date(anotherDate)
  let otherYear = year.getFullYear()
  console.log(otherYear)
}
timeComparison("6/14/1800")