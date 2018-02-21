$(function() {
  var c=document.getElementById("myCanvas");

  var ctx=c.getContext("2d");
  var gravity = 15;
  var num = 0;
  var snowflakes = [];
  var snowflakesback = [];
  for(var i = 0 ; i < 240; i++){
    var snowflake = new Snowflake(ctx, Math.floor((Math.random() * 60) + 1), gravity,Math.floor((Math.random() * c.width) + 1), Math.floor((Math.random() * c.height) + 1), c.width, c.height);
    snowflakes.push(snowflake);

  }
  for(var i = 0 ; i < 240; i++){
    var snowflake1 = new Snowflake(ctx, Math.floor((Math.random() * 10) + 1), gravity,Math.floor((Math.random() * c.width) + 1), Math.floor((Math.random() * c.height) + 1), c.width, c.height);
    snowflakesback.push(snowflake1);

  }

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, c.width, c.height);
  setInterval(function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    for(var i = 0; i < snowflakes.length; i++){

      snowflakes[i].fall();
      snowflakes[i].windy(num);
      snowflakes[i].draw();
      snowflakesback[i].fall();
      snowflakesback[i].windy(num);
      snowflakesback[i].draw(true);
    }
    num = num + 0.02;
  },20)
});
