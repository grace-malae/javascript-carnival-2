  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var uni0 = document.getElementById("uni0").onclick = clicked
var uni1 = document.getElementById("uni1").onclick = clicked
var uni2 = document.getElementById("uni2").onclick = clicked

var inflation = [0, 0, 0]

function clicked (event){
  var unicorn = event.target
  var id = unicorn.id[3]

  inflation[id]++

  if (inflation[id] == 4)
    inflation[id] = 0 

  unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
  
}

// uni0.onclick = clicked
// uni1.onclick = clicked
// uni2.onclick = clicked

//CLICKED FUNCTION:
// 1. figure out which unicorn was clicked
// 2. increase inflation by 1 per click
// 3. make sure inflation level doesn't go past 3
// 4. change source of image to match inflation level

// function clicked (event){
//   var unicorn = event.target

//   if (unicorn.id == "uni0"){
//     inflationLevel0++
//     if (inflationLevel0 == 4)
//     inflationLevel0 = 0
//     unicorn.src = "./images/unicorn-" + inflationLevel0 + ".png"
//   }


//   if (unicorn.id == "uni1"){
//     inflationLevel1++
//     if (inflationLevel1 == 4)
//     inflationLevel1 = 0
//     unicorn.src = "./images/unicorn-" + inflationLevel1 + ".png"
//   }


//   if (unicorn.id == "uni2"){
//     inflationLevel2++
//     if (inflationLevel2 == 4)
//     inflationLevel2 = 0
//     unicorn.src = "./images/unicorn-" + inflationLevel2 + ".png"
//   }
// }