  
// condition part

// document.querySelector('#first-button').addEventListener('click', (event) => {
//     event.preventDefault()
//     document.getElementById('days').value

//     let days = document.getElementById('days').value

    
    
// })




// Breakfast 


 document.addEventListener('DOMContentLoaded', () => {

      const breakFastlist = document.querySelectorAll('#breakfast  ul' )
  
  
      document.querySelector('#breakfast_btn').addEventListener('click', (event) =>{
          event.preventDefault()
          // console.log(document.getElementById('breakfast_data').value)
  
          let breakFast = document.getElementById('breakfast_data').value
  
  
         breakFastlist.innerHTML += `<li>${breakFast} </li>`
  
           breakFastlist.forEach( function (element) {
         element.innerHTML += `<li>${breakFast} sounds awesome!!</li>`
           
  
       } )
  
      })
    } )
    

//  lunch

document.addEventListener("DOMContentLoaded", () =>{

    const lunchDetails = document.querySelectorAll("#lunch ul ")
    document.querySelector("#lunch_btn").addEventListener('click', (event) => {
        event.preventDefault()

        let lunch = document.querySelector('#lunch_data').value

        lunchDetails.innerHTML += `<li>${lunch}<li>`

        lunchDetails.forEach(function (element) {element.innerHTML += `<li>${lunch}</li>`})
    })





// })

// // //   Dinner 
//  function addSupper() {
// const dinnerList =document.querySelectorAll('#dinner ul')
// document.getElementById('dinner_btn').addEventListener('click', (e) =>{
//     e.preventDefault()
//     document.getElementById('dinner_data').value
    
//      let dinner = document.getElementById('dinner_data').value

//      dinnerList.innerHTML += `<li> ${dinner}</li>`

//      dinnerList.forEach(function (element) {element.innerHTML += `<li>${dinner}</li>`})

// })}

// addSupper()

