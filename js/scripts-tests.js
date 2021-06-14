const tests = [
  function () {
    console.log('class Travelogue: When created, starts with initialized properties')

    const actual = new Travelogue()
    const expected = {
      places: []
    }

    console.log('Result', actual, expected)
  },

  function () {
    console.log('class Travelogue: Can add a place to the travelogue')

    const actual = new Travelogue()
    actual.addPlace({
      location: 'Japan',
      notes: 'I enjoyed the sushi',
      timeOfYear: 'June 13, 2021',
      landmarks: 'Mount Fuji',
      moneySpent: 1000000,
    })

    const expected = {
      places: [
        {
          location: 'Japan',
          notes: 'I enjoyed the sushi',
          timeOfYear: 'June 13, 2021',
          landmarks: 'Mount Fuji',
          moneySpent: 1000000,
        }, 
      ],
    }

    console.log('Result', actual, expected)
  }
]

function runTests() {
  const firstTest = tests[0]
  const secondTest = tests[1]

  firstTest()
  secondTest()
  runTest3()
}

function runTest3() {
  console.log("The timeComparsion function will equal It's been 1 year since you been there")
  console.log("expected")
  const actual = timeComparison("6/14/2020")
  const expected = "It's been 1 year since you been there"
  console.log("This is what we put in: 6/14/2020")
  console.log("result", actual)
  console.log("expected", expected)

  const resultColor = actual === expected ? 'green' : 'red'

  console.log(`%c${actual === expected}`, `background-color: ${resultColor}; color: white;`)
}
runTests()