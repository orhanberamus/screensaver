'use-strict';
class Snowflake {
  constructor(ctx, size, gravity, x, y ,width, height){
    this.ctx = ctx;
    this.size = size;
    this.gravity = gravity;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.wind = 100;
    this.images = [
      './img/snowflake.png',
      './img/snowflake1.png',
      './img/snowflake2.png',
      './img/snowflake3.png',
      './img/snowflake4.png'
    ];
    this.image = this.images[Math.floor((Math.random() * 5) )];
  }
  fall(){

      this.y = this.y + ((this.gravity * this.size) /150);

      if(this.y > this.height){
        this.y = -30;
      }

  }
  windy(num){
    this.x = this.x + (((Math.sin(num)* this.size)/60)+1);
    //console.log( Math.sin(num)   );
    if(this.x < -30){
      this.x = this.width +30;
    }else if(this.x > this.width + 30){
      this.x = -30;
    }
  }
  draw(back){
    if(back){
      this.ctx.beginPath();
      this.ctx.fillStyle="#7ff8ff";;
      this.ctx.arc(this.x,this.y,2,0,2*Math.PI);
      this.ctx.fill();
    }else{
      var imgsnow = new Image(60,60);
      imgsnow.src = this.image
      this.ctx.drawImage(imgsnow, this.x, this.y, this.size, this.size);
    }

  }

}
