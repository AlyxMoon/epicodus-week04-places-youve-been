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
