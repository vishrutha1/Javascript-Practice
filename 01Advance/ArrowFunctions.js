//Gneral basic syntax of function

const funrr = function(name){
    return `hey ${name}`
}

console.log(funrr('hym'))

//Arrow functions syntax

const Afunrr = (name) =>  `hey ${name}`


console.log(Afunrr('hym'))

//Array of objects => Arrow functions example
const todos = [ {
    title:'papa doing',
    done: false
},
{
    title:'mama doing',
    done: false
},
{
    title:'bro doing',
    done: true
}
]

const ArrFuc = todos.filter((x) => x.done === true)

let k = ArrFuc.forEach((x) => console.log(x.title))

//Arrow function and this keyword

let things = {
    books:4,
    clothes:3,
//here we cannot use arrow function- for methods and constructors
myCouch : function(){
     return `hey my couch has ${this.books} books`
}
}

console.log(things.myCouch())