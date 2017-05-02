function Menu(x, y){
  this.xcomp = x;
  this.ycomp = y;


  this.draw = function(){
    noStroke();
    fill(0,0,0,10);
    for(i=0; i<6; i++){
      rect(0,0, this.xcomp+i*4, this.ycomp);
    }
    fill('#566270');
    rect(0,0, this.xcomp, this.ycomp);

    text("FlightModelo - Beta", windowWidth/2, 10);
  }
}
