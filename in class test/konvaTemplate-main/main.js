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

//---------------------------------------------------
// Drawing Feature
//---------------------------------------------------

//keep track of when btn is held
let isDrawing = false;
let lastLine;

//user presses mouse button
function drawMouseDown() {
  isDrawing = true;

  const pos = stage.getPointerPosition();

  lastLine = new Konva.Line({
    stroke: "red",
    strokeWidth: "5",
    lineCap: "round",
    lineJoin: "round",
    points: [pos.x, pos.y, pos.x, pos.y],
  });
  firstLayer.add(lastLine);
}

//add function to mousedown event
stage.on("mousedown", drawMouseDown);

//user moves their moouse
function drawMouseMove() {
  //dont run if not drawing
  if (isDrawing === false) {
    return;
  }

  //if isDrawing is true
  const pos = stage.getPointerPosition();

  let newPoints = lastLine.points().concat([pos.x, pos.y]);
  lastLine.points(newPoints);
}

//add function to mousemove event
stage.on("mousemove", drawMouseMove);

//user releases mouse button
function drawMouseUp() {
  isDrawing = false;
}

//add function to mouseup event
// stage.on("mouseup", drawMouseUp);

//this way there will be no glutch since it doesnt matter whether u r in or out of window to stop drawing
window.addEventListener("mouseup", drawMouseUp);
