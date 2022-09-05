let array = []
let array2 = []
let array3 = []
 
 fetch ("http://localhost:3000/suggestions")
 .then(response => response.json())
 .then(data => {

display(data)
 })

 function display(data){

    for(let item of data){ 
        array.push(item.morning)
        array2.push(item.dayMeal)
        array3.push(item.nightMeal)
        // console.log(array)
        

    }
    const btn = document.getElementById('first-button')
    btn.addEventListener('click', () => {
        document.querySelector('#breakfast li').innerHTML = array
        document.querySelector('#lunch li').innerHTML = array2
        document.querySelector('#dinner li').innerHTML = array3
  
    } )
    
    
 }

//  function display(data) {}


