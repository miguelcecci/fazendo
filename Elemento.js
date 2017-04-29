function Elemento(id, nome, posx, posy) {
  this.id = id;
  this.nome = nome;
  this.x = posx;
  this.y = posy;
  this.sx = 100;
  this.sy = 50;
  this.selected = false;

  this.selectElm = function(){
    this.selected = true;
  }
  this.unselectElm = function() {
    this.selected = false;
  }

  this.renomear = function(v){
    this.nome = v;
  }


  this.desenha = function(){
    noStroke();
    fill(20);
    rect(this.x+3, this.y+3, this.sx, this.sy);
    fill(255);
    if(this.selected){
      fill(215,255,255);
    }
    stroke(0);
    rect(this.x, this.y, this.sx, this.sy);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(this.nome, this.x+this.sx/2, this.y+this.sy/2);

  }
}
