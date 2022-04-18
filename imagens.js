// variavel da tela
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro01;
let imagemDoCarro02;
let imagemDoCarro03;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro01 = loadImage("imagens/carro-1.png");
  imagemDoCarro02 = loadImage("imagens/carro-2.png");
  imagemDoCarro03 = loadImage("imagens/carro-3.png");
  imagemDosCarros = [imagemDoCarro01, imagemDoCarro02, imagemDoCarro03, imagemDoCarro01, imagemDoCarro02, imagemDoCarro03];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3")
  //somDoPonto= loadSound("sons/ponto.mp3");
}