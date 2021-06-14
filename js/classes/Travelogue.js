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

function monthAndYearComparison (dateString1, dateString2) {
  
  const date1 = new Date(dateString1)
  const date2 = new Date(dateString2)

  const yearDifference = date1.getFullYear() - date2.getFullYear()
  const monthDifference = date1.getMonth() - date2.getMonth()

  return { month: monthDifference, year: yearDifference }
}

// name pending
function monthAndYearComparisonString (dateString1, dateString2) {
  const difference = monthAndYearComparison(dateString1, dateString2)
}
