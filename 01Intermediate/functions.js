let funcName = function(){
    console.log("Hey this is function syntax")
}

funcName()

//using parameters

let funcName1 = function(name,index){
    console.log(`Hey this is ${name} function having ${index} programs`)
}

funcName1('vish',1)

//Return 

let num = function(x , y){
    let a = x+y;
    return a
}
console.log(num(2,3))

//Default Parameters

let funcName2 = function(name='xna',courseContent = '0'){
    return `hey ${name} you have ${courseContent} free courses`
}

console.log(funcName2('brad',4))