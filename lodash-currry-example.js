import _ from 'lodash'

let dragon = (name, size, element) => `${name} is a ${size} dragon that breathes ${element}!`

dragon = _.curry(dragon)

let fluffyKinsDragon = dragon('fluffyKinsDragon')
let tinyDragon = fluffyKinsDragon('tiny')

console.log(tinyDragon('water'));