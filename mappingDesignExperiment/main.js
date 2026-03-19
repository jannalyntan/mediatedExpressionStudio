//---------------------------------------------------
//Find our elements
//---------------------------------------------------
const stageContainer = document.querySelector("#stage-container");
const circleBtn = document.querySelector("#circle-btn");

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
