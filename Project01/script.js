var ul = document.getElementById('list')
var li;

//add
var addButton = document.getElementById("add")
addButton.addEventListener('click', addItem)


function addItem(){
    var input = document.getElementById('input')
    var item = input.value;
    var textnode = document.createTextNode(item)

    if(item == ''){

        //work on it 
        li = document.createElement('li')

       
        var item1 = document.createElement('p')
        item1.textContent ="enter your todo"
        document.querySelector('body').appendChild(item1)
        ul.insertBefore(li, ul.childNodes[0])
        li.className='visual'

    }
    else{
        li = document.createElement('li')

        //checkbox
       var checkbox = document.createElement('input')
       checkbox.type='checkbox'
       checkbox.setAttribute('id','check')

       //label

       var label = document.createElement('label')
       label.setAttribute('for','item')

       //add these elemets on web page
       ul.appendChild(label)
       li.appendChild(checkbox)
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li, ul.childNodes[0])

       setTimeout(() => {
             li.className='visual'
       },1)
      

       input.value=''

}
}


//remove
var removeButton = document.getElementById("remove")
removeButton.addEventListener('click', removeItem)


function removeItem(){
   li=ul.children;
   console.log(li)

   for (let index = 0; index < li.length; index++) {
       while(li[index] && li[index].children[0].checked){
               ul.removeChild(li[index])
       }
   }
}

//delete

var deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click',deleteItem)



function deleteItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
      const element = li[index]

      console.log(element)
      ul.removeChild(li[index])
    
        
    }
}