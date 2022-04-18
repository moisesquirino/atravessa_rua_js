function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarCarro();
  mostrarAtor();
  movimentaCarro();
  movimentaAtor();
  voltaCarroInicio();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}