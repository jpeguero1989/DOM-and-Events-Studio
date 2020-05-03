// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOffBtn = null;
let landButton = null;
let abortButton = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;
let response = null;
let backColor = null;
let flightStatus = null;
let spaceShuttleHeight = null;
let rocket = null;
let up=250,left=0
let firstTime = false;
let height = null;

function init() {

  takeOffBtn = document.getElementById("takeoff");
  takeOffBtn.addEventListener("click", function () {
    action("takeoff");
  });

  backColor = document.getElementById("shuttleBackground");

  flightStatus = document.getElementById("flightStatus");
  spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  landButton = document.getElementById("landing");
  landButton.addEventListener("click", function(){
    action("landing");
  });

  abortButton = document.getElementById("missionAbort");
  abortButton.addEventListener("click", function() {
    action("abort");
  });

  upButton = document.getElementById("upButton");
  upButton.addEventListener("click", function() {move("Up");
});

  downButton = document.getElementById("downButton");
  downButton.addEventListener("click", function() {move("Down");
});

  leftButton = document.getElementById("leftButton");
  leftButton.addEventListener("click", function () {move("Left");
});

  rightButton = document.getElementById("rightButton");
  rightButton.addEventListener("click", function () {move("Right");
});
if (firstTime === false)
{
  document.getElementById("rocket").style.top = up + "px";
  firstTime = true;
}

}

function action(actionType) {
  switch (actionType) {
    case "takeoff":
      response = confirm("Confirm that the shuttle is ready for takeoff.");

      if (response === true) {
        flightStatus.innerHTML = "Shuttle in flight.";
        backColor.style.backgroundColor = "blue";
        //height += 10000
        //spaceShuttleHeight.innerHTML = height;
        move("Up")
      }
      break;
    case "landing":
      alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      backColor.style.backgroundColor = "green";
      height =0;
        spaceShuttleHeight.innerHTML = height;
        up = 250;
        document.getElementById("rocket").style.top = up +"px";
        left = 0;
        document.getElementById("rocket").style.right = left+"px";
      break;
    case "abort":
      response = confirm("Confirm that you want to abort the mission.");

      if (response === true) {
        flightStatus.innerHTML = "Mission aborted.";
        backColor.style.backgroundColor = "green";
        height =0;
        spaceShuttleHeight.innerHTML = height;
        up = 250;
        document.getElementById("rocket").style.top = up +"px";
        left = 0;
        document.getElementById("rocket").style.right = left+"px";
      }
      break;
  }
}

function move(movement) {

  switch (movement) {
    case "Up":
      if (height < 250000)
      {
        up -= 10;
        document.getElementById("rocket").style.top = up +"px";
        height += 10000;
        spaceShuttleHeight.innerHTML = height;
      }
      break;

    case "Down":
      if (height >= 10000)
      {
        up += 10;
        document.getElementById("rocket").style.top = up +"px";
        height -= 10000;
        spaceShuttleHeight.innerHTML = height;
      }
      break;

    case "Left":
      if (left < 250)
      {
        left +=10;
        document.getElementById("rocket").style.right = left+"px";
      }
      break;

    case "Right":
      if (left > -250)
      {
       left -=10;
      document.getElementById("rocket").style.right = left+"px";
      }
      break;

  }
}

window.onload = init;
