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

  this.desenha = function(){
    noStroke();
    fill(170);
    rect(this.x+3, this.y+3, this.sx, this.sy);
    fill('#FFFFF3');
    if(this.selected){
      fill('#E0E3DA');
    }
    stroke('#566270');
    rect(this.x, this.y, this.sx, this.sy);
    fill('#566270');
    noStroke();
    textAlign(CENTER, CENTER);
    text(this.nome, this.x+this.sx/2, this.y+this.sy/2);
    if(this.selected){
      stroke('#566270');
      fill('#A593E0');
      rect(this.x+this.sx-20, this.y+this.sy-20, 20, 20);
    }

  }
}
