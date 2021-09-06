let larguraDosCarros = largura * 0.15;
let alturaDosCarros = altura * 0.1;

let xCarros = [largura, largura, largura, largura * (-0.2), largura * (-0.2), largura * (-0.2)];

let yCarros = [altura * 0.1, altura * 0.24, altura * 0.38, altura * 0.53, altura * 0.66, altura * 0.795];

let posicaoInicialCarros = [largura, largura, largura, largura * (-0.2), largura * (-0.2), largura * (-0.2)];

let passouCarroTodo = [largura * (-0.2), largura * (-0.2), largura * (-0.2), largura, largura, largura];

let velocidadeCarros = [(velocidadePadrao + 1) * -1, (velocidadePadrao + 2) * -1, (velocidadePadrao) * -1, velocidadePadrao + 2, velocidadePadrao + 1, velocidadePadrao];


function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraDosCarros, alturaDosCarros);
  }  
}

function movimentaCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] += velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDosCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (xCarros[i] == passouCarroTodo[i]){
      xCarros[i] = posicaoInicialCarros[i];
    }
  }
}
