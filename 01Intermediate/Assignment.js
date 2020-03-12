let funct = function(currMarks , totalMarks){
    let perc = (currMarks/totalMarks)*100
    
    let myGrade = ''

    if(perc > 90){
        myGrade = "A grade"
    }
    else if(perc < 90 && perc > 70){
        myGrade = "B grade"
    }
    else if(perc < 70 && perc > 50){
        myGrade = "C grade"
    }
    else{
        myGrade = "Fail"
    }

    return `your grade is ${myGrade} and percentage is ${perc}`
}

console.log(funct(60,90))