let imagemNave;
let imagemAlien;
let imagemMissil;

let posicaoMissil;
let posicaoNave;
let posicaoAlien;


//preparando o ambiente de trabalho
//carrengado as fantasias do nosso jogo
function preload(){
    // carregando imagens
    imagemNave = loadImage("imagens/Nave.png");
    imagemAlien = loadImage("imagens/Alien1.png");
    imagemMissil = loadImage("imagens/Missil.png");
}

//"Ao clicar na bandeira verder"
function setup() {
    // criando um palco com 900 de largura e 600 de altura
    createCanvas(900, 600);

    posicaoMissil = createVector(450, 500);
    posicaoNave = createVector(400 , 500);
    posicaoAlien = createVector(350, 200);
}

//desenhando nosso atores - igual ao bloco "sempre" do scracth
function draw() {
    // pintar o fundo do palco de cinza
    background(100);
    //movendo o míssil para cima
    posicaoMissil.y = posicaoMissil.y - 1;
    //centralizando a posição da nave
    posicaoNave.x = mouseX - imagemNave.width / 2;
    //desenhar a nave
    image(imagemNave, posicaoNave.x, posicaoNave.y);
    //desenhando o alien
    image(imagemAlien, posicaoAlien.x, posicaoAlien.y);
    //desenhando o missil
    image(imagemMissil, posicaoMissil.x, posicaoMissil.y);

}
//quando o mouse for pressionado
function mousePressed(){
    posicaoMissil.y = posicaoNave.y;
    posicaoMissil.x = mouseX - imagemMissil.width / 2;
}