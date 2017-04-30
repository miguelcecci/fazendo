function Menu(x, y){
  this.xcomp = x;
  this.ycomp = y;

  this.draw = function(){
    noStroke();
    fill(239);
    rect(0,0, this.xcomp, this.ycomp);
  }
}
