

function runTests () {
  console.log('class Travelogue: When created, starts with initialized properties')

  const actual = new Travelogue()
  const expected = { places: [] }

  console.log('Result', actual, expected)
}

runTests()