var elm = [];
var selected;
var aux, aux1 = true;
var grabbed = false;
var nome = '';
var menu;
var tool = 0;
var resizing = false;

function setup() {
  fill(0);
  var inp = createInput('');
  inp.position(5,5);
  inp.input(myInputEvent);
  inp.addClass('inputdetexto');
  var renamebt = createButton('Rename');
  renamebt.addClass('inputdetexto');
  renamebt.position(5,35);
  renamebt.mousePressed(renomearElemento);

  menu = new Menu(windowWidth/10, windowHeight);
}

function myInputEvent(){
  nome = this.value();
}

function draw(){
  createCanvas(windowWidth, windowHeight);
  background('#FFFFF3');
  for (var i = 0; i < elm.length; i++) {
    if(elm[i]){
      elm[i].desenha();
      if(i != selected){
        elm[i].unselectElm();
      }
      if(rover(elm[i].x, elm[i].y, elm[i].sx, elm[i].sy)){
        if(resizing==true || selected != null && rover(elm[selected].x+elm[selected].sx-20, elm[selected].y+elm[selected].sy-20, 20, 20)){
          if(mouseIsPressed){
            elm[selected].sx = mouseX-elm[selected].x+10;
            elm[selected].sy = mouseY-elm[selected].y+10;
            resizing = true;
          }else{
            resizing = false;
          }
        }else{
          if(mouseIsPressed){
            if(!grabbed){
              selected = i;
              // apagarElemento();
              selectElement();
              grabbed = true;
            }
          }else{
            grabbed = false;
          }
        }
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
  if(!resizing && mouseIsPressed && !grabbed && !rover(0, 0, menu.xcomp, menu.ycomp)){
    if(selected == null || !rover(elm[selected].x+elm[selected].sx-10, elm[selected].y+elm[selected].sy-10, 10, 10)){
      if(aux){
        elm[elm.length] = new Elemento(1, nome, mouseX, mouseY);
        aux = false;
      }
    }
  }else{
    aux = true;
  }
}

function resizeElement() {

}

function renomearElemento(){
  if(elm[selected].selected){
    elm[selected].nome = nome;
  }
}

function apagarElemento() {
  elm[selected] = 0;
  selected = 0;
}

function moveElement() {
  elm[selected].x = mouseX-elm[selected].sx/2;
  elm[selected].y = mouseY-elm[selected].sy/2;
  if(elm[selected].selected){
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
