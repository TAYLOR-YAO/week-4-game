
var total = 0 ;
var guessedNumber = 0;
var wins = 0;
var loses = 0;
var numbarToReach;
var redCristal;
var blueCristal;
var yellowCristal;
var greenCristal;

  $(document).ready(function(){
    function rand (){
    numbarToReach=Math.floor(Math.random( ) * 120) + 19;
    guessedNumber = numbarToReach;
    console.log("guessed number:", guessedNumber);
  }
  rand();
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
        loseCondition()
      $("#loses").html(loses);
      console.log("loses");
    }
  });
//blue Cristal
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
        loseCondition()
      console.log("loses");
    }
  });
//Yellow cristal
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
        loseCondition()
      console.log("loses");
    }
  });
//-----------------------------------------------------------------------
// green Cristal
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
        loseCondition()
      console.log("loses");
    }
  });
  //--------------------------------------------------------------------
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
      rand();
      $("#number").html(guessedNumber);
      $("#totals").html(total);
      $("#wins").html( "" + wins);
      $("#loses").html(" " + loses);
    }
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------

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
    rand();
    $("#number").html(guessedNumber);
    $("#totals").html(total);
    $("#wins").html( "" + wins);
    $("#loses").html(" " + loses);
  }

  //--------------------------------------------------------------------


  $("#number").html(guessedNumber);
  $("#totals").html(total);
  $("#wins").html( "" + wins);
  $("#loses").html(" " + loses);

});