
var total = 0 ;
var guessedNumber = 0;
var wins = 0;
var loses = 0;
var guessedNumber;
var redCristal;
var blueCristal;
var yellowCristal;
var greenCristal;
// var winComent;
// var loseComents;

  $(document).ready(function(){
// The Randum Number Fuction
    function rand (){
    guessedNumber=Math.floor(Math.random( ) * 120) + 19;
    console.log("guessed number:", guessedNumber);
  }
  rand();
  // Red cristan....On click Function
  redCristal = Math.floor(Math.random()*12) +1;
  console.log("red crystal:", redCristal);
  $("body").on("click", "#red", function(){
    total = total + redCristal ;
    console.log("total:", total);
    $("#totals").html(total);
    if(total === guessedNumber){
      winCondition();
      console.log("wins");
    }else if(total > guessedNumber){
        loseCondition();
      $("#loses").html(loses);
      console.log("loses");
    }
  });

//blue Cristal....On click Function
  blueCristal = Math.floor(Math.random()*12) +1;
  console.log("blue crystal:", blueCristal);
  $("body").on("click", "#blue", function(){
    total = total + blueCristal;
    console.log("total:", total);
    $("#totals").html(total);
    if(total === guessedNumber){
      winCondition();
      console.log("wins");
    }else if(total > guessedNumber){
        loseCondition();
      console.log("loses");
    }
  });

//Yellow cristal....On click Function
  yellowCristal = Math.floor(Math.random()*12) +1;
  console.log("yellow crystal:", yellowCristal);
  $("body").on("click", "#yellow", function(){
    total = total + yellowCristal;
    console.log("total:", total);
    $("#totals").html(total);
    if(total === guessedNumber){
      winCondition();
      console.log("wins");
    }else if(total > guessedNumber){
        loseCondition();
      console.log("loses");
    }
  });

// green Cristal..... On click Function
  greenCristal = Math.floor(Math.random()*12) +1;
  console.log("green crystal:", greenCristal);
  $("body").on("click", "#green", function(){
    total = total + greenCristal;
    console.log("total:", total);
    $("#totals").html(total);
    if(total === guessedNumber){
      winCondition();
      console.log("wins");
    }else if(total > guessedNumber){
        loseCondition();
      console.log("loses");
    }
  });

  // Win Condition
    function winCondition() {
      wins++;
      $("#wins").html(wins);
      redCristal = Math.floor(Math.random()*12) +1;
      console.log("red crystal:", redCristal);
      blueCristal = Math.floor(Math.random()*12) +1;
      console.log("blue crystal:", blueCristal);
      yellowCristal = Math.floor(Math.random()*12) +1;
      console.log("yellow crystal:", yellowCristal);
      greenCristal = Math.floor(Math.random()*12) +1;
      console.log("green crystal:", greenCristal);
      total = 0;
      console.log("this is the total:" + total);
// Comment board................................
      if(wins === 12){
        var winComent = "YOu Won!";
        $("#comments").html(" " + winComent);
        wins = 0;
        loses = 0;
    }else if(loses === 9){
        var loseComent = "You Lost!";
        winComent = "YOu Won!";
        console.log("You Won!")
        $("#comments").html(" " + loseComent);
        console.log("game over!");
        wins = 0;
        loses = 0;
    }
    rand();

//.........................    rand();
      $("#number").html(guessedNumber);
      $("#totals").html(total);
      $("#wins").html( "" + wins);
      $("#loses").html(" " + loses);
    }

// Lose Conditin
  function loseCondition() {
    loses++;
    $("#lose").html(loses);
    redCristal = Math.floor(Math.random()*12) +1;
    console.log("red crystal:", redCristal);
    blueCristal = Math.floor(Math.random()*12) +1;
    console.log("blue crystal:", blueCristal);
    yellowCristal = Math.floor(Math.random()*12) +1;
    console.log("yellow crystal:", yellowCristal);
    greenCristal = Math.floor(Math.random()*12) +1;
    console.log("green crystal:", greenCristal);
    total = 0;
    console.log("this is the total:" + total);
//comment board ...........................................
    if(wins === 12){
        var winComent = "You Won!";
        $("#comments").html(" " + winComent);
        wins = 0;
        loses = 0;
    }else if(loses === 9){
        var loseComent = "You Lost!";
        winComent = "You Won!";
        console.log("You Won!");

        $("#comments").html(" " + loseComent);
        console.log("game over!");
        wins = 0;
        loses = 0;
    }
//.............................................................
    rand();


    $("#number").html(guessedNumber);
    $("#totals").html(total);
    $("#wins").html( "" + wins);
    $("#loses").html(" " + loses);
  }

 

  $("#number").html(guessedNumber);
  $("#totals").html(total);
  $("#wins").html( "" + wins);
  $("#loses").html(" " + loses);

});





