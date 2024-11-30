//https://youtu.be/q2xfVjHdsoA
//Comisión 2.  
//Martina Fuhr 119031/9; Julia Ferrari 119028/6.
let objJuego; //variable objeto tipo juego con las características de la class, declaro un objeto y lo inicializo con mi clase.
let imagen = [];
let texto = [];
let boton=[];
let miFuente;
let cancionAmbiente;

  function preload() {
  for (let i=0; i<4; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
  for (let a=0; a<2; a++) {
    boton[a] = loadImage("data/boton"+a+".png");
  }
  texto = loadStrings('data/textosjuego.txt');
  miFuente = loadFont('data/ArcaneFuente.otf');
  cancionAmbiente = loadSound('data/AshesAndBlood.mp3');
}

function setup() {
  createCanvas (640, 480);
  textFont(miFuente);
  tiempoinicio=millis();
  objJuego = new juego();
  imagen[2].resize (60, 140);
  imagen[1].resize(260, 160);
  cancionAmbiente.setVolume(0.5);
}


function draw() {
  background (200);
  objJuego.dibujarPantallas();
}
 
function mousePressed(){
  objJuego.mousePresionado();
}

function keyPressed() {
  console.log("Tecla presionada: ", keyCode);
  objJuego.teclaPresionada(keyCode); //al juego y del juego al personaje
}
