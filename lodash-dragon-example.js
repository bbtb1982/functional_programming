import _ from 'lodash'

let dragons = [
  {name:'dragon a', element: 'lightning'},
  {name:'dragon b', element: 'lightning'},
  {name:'dragon c', element: 'lightning'},
  {name:'dragon 1', element: 'fire'},
  {name:'dragon 2', element: 'timewarp'},
  {name:'dragon 3', element: 'water'}
]

let hasElement =
  _.curry((element, obj) => obj.element === element)

let lightningDragons =
  dragons.filter(hasElement('lightning'))

console.log(lightningDragons);

