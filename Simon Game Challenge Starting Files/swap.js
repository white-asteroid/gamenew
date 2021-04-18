
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function (event) {
  if (!started) {



    nextSequence();
    started = true;
  }
  else {
    $("h1").text("Press A to start");
  }

}

);




$(".btn").click(function () {


  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);


});

function checkAnswer(currentLevel) {
  var gsize = gamePattern.length;
  
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
      console.log("true");
      if(userClickedPattern.length == gamePattern.length){
        nextSequence();
      }
    }

    else {
      console.log("false");
    }
  }
  



function nextSequence() {
  userClickedPattern.length = 0;
  var randomNumber = Math.floor(Math.random() * 4)
  level += 1;
  $("#level-title").text("Level " + level);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);



}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}