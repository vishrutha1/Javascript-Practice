const days = ['Mon','Tue','Wed','Thu','Fri','Sat']

//To access specific one element in array
console.log(days[2])

//But to access all the elements in array stored in database-loops
//come into picture

days.forEach(function(day,index){
    console.log( `${index}- ${day} referred`)
})

//For loop

for (let i = 0; i < days.length; i++) {
    const element = days[i];
    console.log(element)
    
}
