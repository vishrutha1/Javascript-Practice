let myObject = {
    name: 'vishrutha',
    age: 20,
    gender: 'Female',
    salary:50000
}

console.log(myObject)
console.log(myObject.age)
myObject.age = 30
console.log(myObject)

//function taking object
 let funct = function(myObject){
      return `My salary changed to ${myObject.salary + 400}`
 }

 console.log(funct(myObject))


 let funct2 = function(myObject){
    return {
first: `My salary changed to ${myObject.salary + 400}`,
second :`My salary changed to ${myObject.salary + 1000}`

    }
}


let addon = funct2(myObject)
console.log(addon.second)