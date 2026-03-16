// find elements from the code
const introDialog = document.querySelector("#intro-dialog");
console.log(introDialog);
const introDialogClose = document.querySelector("#dialog-close-btn");

const playBtn = document.querySelector("#play-btn");

const text = document.querySelector("#header");
const stopText = document.querySelector("#stop-text");
// Intro Dialog Setup

introDialog.showModal();

introDialogClose.addEventListener("click", () => {
  introDialog.close();
  Tone.start();
});

// Play Sound With tone

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note

function playNote() {
  synth.triggerAttackRelease("C4", "8n");
}

playBtn.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttack("C4");
  document.body.style.backgroundColor = "blue";
  text.style.color = "white";

  setTimeout(() => {
    stopText.classList.remove("hidden");
    synth.triggerAttack("C6");
  }, 2000);
}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "white";
  text.style.color = "blue";
  stopText.classList.add("hidden");
}

playBtn.addEventListener("mousedown", startNote);
playBtn.addEventListener("mouseup", endNote);
