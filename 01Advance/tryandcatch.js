//program doesn't freeze if error is seen using try and catch

const convertToRS = (dollar) => {
   if(typeof dollar === 'number')
    { 
        return dollar*64
    }
     else
     {
       throw Error("Amt needs to be in  number")

     }
   
}

try{
    let x = convertToRS(5)
   // let x = convertToRS("five")
    console.log(x)

}
catch(e){
    console.log(e)
}

console.log("program doesnt freeze even if error is thrown")