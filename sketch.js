var elm = [];
var selected;
var aux, aux1 = true;
var grabbed = false;
var nome = '';
var menu;
function setup() {
   var inp = createInput('');
   inp.position(5,5);
   inp.input(myInputEvent);
   menu = new Menu(windowWidth/10, windowHeight);
}

function myInputEvent(){
  nome = this.value();
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
        if(!grabbed){
          selected = i;
          selectElement();
          grabbed = true;
        }
      }else{
        grabbed = false;
      }
    }
  }
  criarElemento();
  if(mouseIsPressed && grabbed){
    moveElement();
  }
  menu.draw();
}


function selectElement() {
  elm[selected].selectElm();
}

function criarElemento() {
  if(mouseIsPressed && !grabbed && !rover(0, 0, menu.xcomp, menu.ycomp)){
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

function apagarElemento() {
  elm[selected] = 0;
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
