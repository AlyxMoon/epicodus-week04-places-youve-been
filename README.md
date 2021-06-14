# Epicodus | Week 04 | Places You've Been

> Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object (including specs, which should go in your README). If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

## Live Site
[https://alyxmoon.github.io/epicodus-week04-places-youve-been/](https://alyxmoon.github.io/epicodus-week04-places-youve-been/)

## Contributors
- [Allister Kays](https://github.com/AlyxMoon)
- [Arthur Lee](https://github.com/Gengur123)

## Tests

- be able to add object, multiple properties:
  - location
  - notes
  - time of year
  - landmarks
  - money spent
  - show details
  - function: compare time to current time

- be able to toggle showing details for a place

#### Describe: Travelogue()

```
Test: When created, starts with initialized properties
Code: new Travelogue()
Expected: { places: [] }
```

```
Test: Can add a place to the travelogue
Code: travelogue.addPlace({
  location: 'Japan',
  notes: 'I enjoyed the sushi',
  timeOfYear: 'June 13, 2021',
  landmarks: 'Mount Fuji',
  moneySpent: 1000000,
})
Expected: { 
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
```

#### Describe: monthAndYearComparison()

```
Test: Returns correct year/month when year is different by 1
Code: monthAndYearComparison('6/14/2021', '6/14/2020')
Expected: { month: 0, year: 1 }
```

```
Test: Returns correct year/month when year is different by 5
Code: monthAndYearComparison('6/14/2025', '6/14/2020')
Expected: { month: 0, year: 5 }
```

```
Test: Returns correct year/month when month is different by 1
Code: monthAndYearComparison('6/14/2020', '5/14/2020')
Expected: { month: 1, year: 0 }
```

```
Test: Returns correct year/month when month is different by 3
Code: monthAndYearComparison('6/14/2020', '4/14/2020')
Expected: { month: 2, year: 0 }
```

```
Test: Returns correct year/month when year and month are different
Code: monthAndYearComparison('8/14/2022', '4/14/2020')
Expected: { month: 4, year: 2 }
```


- create a travelogue instance
- add a place you've been to the travelogue
- toggle the `showing details` property for a place in the travelogue
- run `timeSinceVisited` and get the difference in time between current and `time of year` property, rounded by month/year