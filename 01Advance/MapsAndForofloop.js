const john = {
    name:'john',
    age:12,
    Isactive: true
}
const marry = {
    name:'marry',
    age:15,
    Isactive: true
}
const troop = {
    name:'troop',
    age:17,
    Isactive: false
}

let users = new Map()

console.log(typeof users + " type")

//uploading data to DB
users.set('john',john)
users.set('marry',marry)
users.set('troop',troop)

console.log(users)
//displaying map size
console.log("size " + users.size)

//showing keys and values
console.log(users.keys())
console.log(users.values())

//getting data from DB

console.log(users.get('john'))

//for of loop
for (const key of users.keys()) {
    console.log(key)
    
}

for (const [key,value] of users) {
    console.log(key+" - "+value.name)
    
}
for (const [key,value] of users.entries()) {
    console.log(key+" - "+value.age)
    
}

//for each

users.forEach((value,key) => console.log(key+ " - " +value.name))

///////// ***

let kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys()))