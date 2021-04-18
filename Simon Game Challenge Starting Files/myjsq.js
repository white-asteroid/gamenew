
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
  $("#user").text(userClickedPattern[currentLevel]);
  $("#random").text(gamePattern[currentLevel]);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
      console.log("true");
      if(userClickedPattern.length == gamePattern.length){
       setTimeout(function(){nextSequence(),2000});
      }
    }

    else {
      console.log("false");
      $("body").addClass("game-over");
      playSound("wrong");
      setTimeout(function () {
        $("body").removeClass("game-over");
        
      },1200);
      startOver()
    }
  }
  



function nextSequence() {
  
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4)
  level += 1;
  $("#level-title").text("Level " + level);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  for(var k = 0 ;k<gamePattern.length;k++){
    $("#random").append("|G  "+gamePattern[k]+ " ");}
  
  


}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
}

function startOver() {
  started = false;
  gamePattern = [];
  level =0;
  $("h1").text("Press A to start");
  
}