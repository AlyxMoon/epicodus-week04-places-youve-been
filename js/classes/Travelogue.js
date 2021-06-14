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
  let yearDifference = todayYear - otherYear
  let wordYear 
  if (yearDifference === 1) {
    wordYear = "year"
  }else {
    wordYear = "years"
  }
  return `It's been ${yearDifference} ${wordYear} since you been there`
}
