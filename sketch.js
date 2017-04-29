var elm = [];
var selected;
var aux, aux1 = true;
var grabbed = false;
var nome = '';

function setup() {
   var inp = createInput('');
   inp.input(myInputEvent);
}

function myInputEvent(){
  nome = this.value();
  this.value() = nome;
}

function draw(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (var i = 0; i < elm.length; i++) {
    elm[i].desenha();
    if(i != selected){
      elm[i].unselectElm();
    }
    if(rover(elm[i].x, elm[i].y, elm[i].sx, elm[i].sy)){
      if(mouseIsPressed){
        selected = i;
        selectElement();
        grabbed = true;
      }else{
        grabbed = false;
      }
    }
  }
  criarElemento();
  if(mouseIsPressed && grabbed){
    moveElement();
  }
}


function selectElement() {
  elm[selected].selectElm();
}

function criarElemento() {
  if(mouseIsPressed && !grabbed){
    if(aux){
      elm[elm.length] = new Elemento(1, nome, mouseX, mouseY);
      aux = false;
    }
  }else{
    aux = true;
  }
}

function resizeElement() {

}

function moveElement() {
  if(elm[selected].selected){
    elm[selected].x = mouseX-elm[selected].sx/2;
    elm[selected].y = mouseY-elm[selected].sy/2;
  }
}

function rover(x, y, sx, sy) {
  if(mouseX > x && mouseX < x+sx){
    if(mouseY > y && mouseY < y+sy){
      return true;
    }
  }
  return false;
}
