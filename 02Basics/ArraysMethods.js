const arra = ['Book','Table','Pillow']


//Replacing values in start , end or middle
//start - shift,unshift


// console.log(arra.shift())
// console.log(arra)

let x = arra.unshift('pen')
console.log(x)
console.log(arra)

//end - push, pop

console.log(arra.push('pencil'))
console.log(arra)

console.log(arra.pop())
console.log(arra)

//middle - slice

console.log(arra.splice(2,2,'tap'))
console.log(arra)