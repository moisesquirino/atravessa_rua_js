// variavel do ator
let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostrarAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function podeSeMover(){
    return yAtor < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    //somDoPonto.play();
  }
}