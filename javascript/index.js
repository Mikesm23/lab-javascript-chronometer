const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const clockScreen = choronometer.start()
}

function printMinutes() {
 document.getElementById('minDec');
 document.getElementById('minUni');
  console.log();
}

function printSeconds() {
  document.getElementById('secDec');
  document.getElementById('secUni');
}

/*// ==> BONUS
function printMilliseconds() {
  const milDecElement = document.getElementById('milDec');
  const milUniElement = document.getElementById('milUni');
}*/

function printSplit() {
  document.getElementById('splits');
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML =  "STOP";
  btnLeftElement.className =  "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerHTML =  "SPLIT";
  btnRightElement.className =  "btn split";
}

function setStartBtn() {
  btnLeftElement.innerHTML =  "START";
  btnLeftElement.className =  "btn start";
}

function setResetBtn() {
  btnRightElement.innerHTML =  "RESET";
  btnRightElement.className =  "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.innerHTML === "START") {
  setStopBtn()
  setSplitBtn()
} else {
  setStartBtn()
  setResetBtn()
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // clearSplits()
});
