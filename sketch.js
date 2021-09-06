function setup() {
  createCanvas(largura, altura);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  limiteInferior()
  movimentaCarros();
  voltaPosicaoInicialDosCarros();
  verificaColisao();
  marcaPonto();
  vidas();
  placar();
}

