//---------------------------------------------------
//Find our elements
//---------------------------------------------------
const stageContainer = document.querySelector("#stage-container");
const circleBtn = document.querySelector("#circle-btn");
const changeRed = document.querySelector("#change-red");
const changeBlue = document.querySelector("#change-blue");
const changeGreen = document.querySelector("#change-green");

const changeRed2 = document.querySelector("#change-red2");
const changeBlue2 = document.querySelector("#change-blue2");
const changeGreen2 = document.querySelector("#change-green2");

//Find width
let stageContainerWidth = stageContainer.offsetWidth;
console.log(stageContainerWidth);

//Find Height
let stageContainerHeight = stageContainer.offsetHeight;
console.log(stageContainerHeight);

//deafult colour
let circleColour = "red";

//---------------------------------------------------
// create the konva stage
//---------------------------------------------------

const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

//create our layer
const firstLayer = new Konva.Layer();

//add our layer to the stage
stage.add(firstLayer);

//Add interaction to the button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColour,
  });

  //add the circle to our first layer
  firstLayer.add(circle);
}

circleBtn.addEventListener("click", drawNewCircle);

// //---------------------------------------------------
// // Chnage colour of circle via radio
// //---------------------------------------------------
// function changeColourRadio(clickEvent) {
//   //find the value of whichever of the radio buttons was clicked
//   let newColour = clickEvent.target.value;

//   //set the new circle colour to that value
//   circleColour = newColour;
// }

// // add eventlisteners
// changeRed.addEventListener("click", changeColourRadio);
// changeBlue.addEventListener("click", changeColourRadio);
// changeGreen.addEventListener("click", changeColourRadio);

//---------------------------------------------------
// Chnage colour of circle via slider
//---------------------------------------------------

// Function to get the red colour
function getRedSliderValue() {
  const currentRedValue = changeRed2.value;
  return changeRed2.value;
  console.log("Current Red Slider Value:", currentRedValue);
}

changeRed2.addEventListener("input", getRedSliderValue);

// Function to get the blue colour
function getBlueSliderValue() {
  const currentBlueValue = changeBlue2.value;
  return changeBlue2.value;

  console.log("Current Blue Slider Value:", currentBlueValue);
}

changeBlue2.addEventListener("input", getBlueSliderValue);

// Function to get the green colour
function getGreenSliderValue() {
  const currentGreenValue = changeGreen2.value;
  return changeGreen2.value;

  console.log("Current Green Slider Value:", currentGreenValue);
}

changeGreen2.addEventListener("input", getGreenSliderValue);

function changeColourSlide() {
  let red = getRedSliderValue();
  let green = getGreenSliderValue();
  let blue = getBlueSliderValue();

  newColour2 = "rgb(" + red + ", " + green + ", " + blue + ")";

  circleColour = newColour2;
}

// add eventlisteners
changeRed2.addEventListener("input", changeColourSlide);
changeBlue2.addEventListener("input", changeColourSlide);
changeGreen2.addEventListener("input", changeColourSlide);
