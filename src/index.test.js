
describe("Pass all tests to win a T-shirt!", () => {

  it('Destructuring: extract value from array, e.g. extract 0 into x like so `let [x] = [0]`', () => {
    let firstValue = [1]

    expect(firstValue).toEqual(1)
  })

  it('Default values: assign a default value to function parameters', () => {
    const defaultUser = {id: 23, name: 'Joe'}
    const fn = ([user]) => {
      expect(user).toEqual(defaultUser)
    }
    fn([])
  })

  it('Rest Operator: can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, rest) => {
      expect([3,4]).toEqual(rest)
    }
    fn(null, 2, 3, 4)
  })

  it('Arrow Functions: Should bind the context to this', () => {
    const person = {
      age: 1,

      add: function (age) {
        // finish the implementation of the next function using an arrow function
        // and using the parameter v
        function f(v) {
          return this.age
        }

        return f(age)
      },
    }

    let actual = person.add(1)

    expect(actual).toEqual(2)
  })

  const pets = [
    { name: 'guincho', species: 'dog'},
    { name: 'felix', species: 'cat'},
    { name: 'nemo', species: 'fish'},
    { name: 'tweety', species: 'bird'},
    { name: 'snout', species: 'pig'},
    { name: 'fluffy', species: 'rabbit'},
  ]

  it('map pets to match the string', () => {
    // Write a concise anonymous function using .map to return an array containing the array above
    const petNames = __

    expect(petNames).toEqual([
      'guincho is a dog',
      'felix is a cat',
      'nemo is a fish',
      'tweety is a bird',
      'snout is a pig',
      'fluffy is a rabbit'
    ])
  })
})
