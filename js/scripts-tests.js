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
  },

  function () {
    console.log('monthAndYearComparison(): Returns correct year/month when year is different by 1')

    const actual = monthAndYearComparison('6/14/2021', '6/14/2020')
    const expected = { month: 0, year: 1 }

    const isCorrect = (
      actual.month === expected.month &&
      actual.year === expected.year
    )

    const resultColor = isCorrect ? 'green' : 'red'
    console.log(`%c${isCorrect}`, `background-color: ${resultColor}; color: white;`)

    if (!isCorrect) {
      console.log('Actual:', actual)
      console.log('Expected:', expected)
    }
  },

  function () {
    console.log('monthAndYearComparison(): Returns correct year/month when year is different by 5')

    const actual = monthAndYearComparison('6/14/2025', '6/14/2020')
    const expected = { month: 0, year: 5 }

    const isCorrect = (
      actual.month === expected.month &&
      actual.year === expected.year
    )

    const resultColor = isCorrect ? 'green' : 'red'
    console.log(`%c${isCorrect}`, `background-color: ${resultColor}; color: white;`)

    if (!isCorrect) {
      console.log('Actual:', actual)
      console.log('Expected:', expected)
    }
  },

  function () {
    console.log('monthAndYearComparison(): Returns correct year/month when month is different by 1')

    const actual = monthAndYearComparison('6/14/2020', '5/14/2020')
    const expected = { month: 1, year: 0 }

    const isCorrect = (
      actual.month === expected.month &&
      actual.year === expected.year
    )

    const resultColor = isCorrect ? 'green' : 'red'
    console.log(`%c${isCorrect}`, `background-color: ${resultColor}; color: white;`)

    if (!isCorrect) {
      console.log('Actual:', actual)
      console.log('Expected:', expected)
    }
  },

  function () {
    console.log('monthAndYearComparison(): Returns correct year/month when month is different by 3')

    const actual = monthAndYearComparison('6/14/2020', '4/14/2020')
    const expected = { month: 2, year: 0 }

    const isCorrect = (
      actual.month === expected.month &&
      actual.year === expected.year
    )

    const resultColor = isCorrect ? 'green' : 'red'
    console.log(`%c${isCorrect}`, `background-color: ${resultColor}; color: white;`)

    if (!isCorrect) {
      console.log('Actual:', actual)
      console.log('Expected:', expected)
    }
  },

  function () {
    console.log('monthAndYearComparison(): Returns correct year/month when year and month are different')

    const actual = monthAndYearComparison('8/14/2022', '4/14/2020')
    const expected = { month: 4, year: 2 }

    const isCorrect = (
      actual.month === expected.month &&
      actual.year === expected.year
    )

    const resultColor = isCorrect ? 'green' : 'red'
    console.log(`%c${isCorrect}`, `background-color: ${resultColor}; color: white;`)

    if (!isCorrect) {
      console.log('Actual:', actual)
      console.log('Expected:', expected)
    }
  },
]

function runTests() {
  tests.forEach(function (test) {
    test()
  })
}

runTests()
