var gameState=0;
var playerCount,database,form,player,game;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("pink");
    if(playerCount===4){
        game.update1
    }
    if(gameState===1){
        clear()
        game.play()
    }
    drawSprites();
}

