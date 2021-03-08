  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// push the left and right arrow keys to change the outfit
//push the up and down arrow keys to change which part of the body we're changing

document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keyCode == '38'){
    //up
    changeVertical(-1)
  }
  else if (e.keyCode == '40'){
    //down
    changeVertical(1)

  }
  else if (e.keyCode == '37'){
    //left
    changeHorizontal(-1)
  }
  else if (e.keyCode == '39'){
    //right
    changeHorizontal(1)
  }
}

var indexes = [0, 0, 0]
var mainIndex = 0
var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")
var imgs = [head, body, shoes]
var strings = ["head", "body", "shoes"]


function changeHorizontal(shift) {
  
  var index = indexes[mainIndex]
  var image = imgs[mainIndex]
  var str = strings[mainIndex]

  index += shift

  if (index < 0){
    index = 5
  }
  if (index > 5){
    index = 0
  }
  indexes[mainIndex] = index
  image.src = "./images/"+ str + index + ".png"
}


function changeVertical(shift){
  mainIndex += shift

  if (mainIndex < 0)
    mainIndex = 2
  
  if (mainIndex > 2)
    mainIndex = 0
  
}