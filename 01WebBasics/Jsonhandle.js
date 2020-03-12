const student = {
    name:'monk',
    age:12,
    Isactive:true
}

//converrt student object to string and store in local storage

const stustring = JSON.stringify(student)
console.log(typeof stustring)

localStorage.setItem('student', stustring)

//covert string to object

const stuobj = JSON.parse(stustring)
console.log(typeof stuobj)

console.log(stuobj.age)