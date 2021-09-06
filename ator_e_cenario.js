//Cenário
let largura = 500;
let altura = 400;
let estrada;

//Ator
let velocidadePadrao = 3;
let ator;
let xAtor = largura * 0.2;
let yAtor = altura * 0.925;
let larguraDoAtor = largura * 0.06;
let alturaDoAtor = altura * 0.06;
let colisao = false;
let pontos = 0;
let tentativas = 3;
let podeSeMover = true;

function mostraAtor(){
  image(ator, xAtor, yAtor, larguraDoAtor, alturaDoAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-= velocidadePadrao;
  } else if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover){
        yAtor+= velocidadePadrao;
      }
  } else if(keyIsDown(RIGHT_ARROW)){
    xAtor+= velocidadePadrao;
  } else if(keyIsDown(LEFT_ARROW)){
    xAtor-= velocidadePadrao;
  }
}

function posicaoInicialAtor(){
      xAtor = largura*0.2;
      yAtor = altura*0.925;
}

function verificaColisao(){
   //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemCarros.length; i++){
    if (collideRectRect(xCarros[i], yCarros[i], larguraDosCarros, alturaDosCarros, xAtor, yAtor, larguraDoAtor, alturaDoAtor )){
      colisao = true;
      colidiu.play();
      posicaoInicialAtor();
      tentativas--;
    }
  }
}

function marcaPonto(){
  if(yAtor <= largura * 0.005){
     ponto.play();
     posicaoInicialAtor();
     pontos++;
  }
}

function vidas(){
  if (tentativas == 0){
    posicaoInicialAtor();
    tentativas = 3;
    pontos = 0;
  }
}

function placar(){
  textAlign(CENTER);
  textSize(width*0.05);
  fill('yellow');
  text('Pontos: ' + pontos,width*0.3, width*0.05 );
  fill('white');
  text('Vidas: ' + tentativas,width*0.7, width*0.05 );
}

function limiteInferior(){
  if(yAtor > altura*0.925){
    podeSeMover = false;
  } else if (yAtor < altura*0.925){
    podeSeMover = true;
  }
  
}