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
function timeComparison (dateString1, dateString2) {
  let date1 = new Date(dateString1)
  let date1Year = date1.getFullYear()
  let date1Month = date1.getMonth()

  let date2 = new Date(dateString2)
  let date2Year = date2.getFullYear()
  let date2Month = date2.getMonth()

  let yearDifference = date1Year - date2Year
  let monthDifference = date1Month - date2Month

  return { month: monthDifference, year: yearDifference }
}
