const canvas=document.querySelector('#game')
const game=canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
let spanLives=document.querySelector('#vidas')
let spanTime=document.querySelector('#time')

window.addEventListener('load',setcanvasSize)
window.addEventListener('resize',setcanvasSize)
let canvasSize
let elementsSize
let level=0
let lives=3
let timeStart;
let playerPosition = {
    x: undefined,
    y: undefined,
  };
  let giftPosition = {
    x: undefined,
    y: undefined,
  };
  let enemyPositions=[];
  
function startGame(){
game.font=elementsSize+ 'px Verdana'
game.textAlign="start"
enemyPositions=[];
let map = maps[level].match(/[IXO\-]+/g).map(a=>a.split(""))
if(!map){
    gameWin();
}
if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
  }

game.clearRect(0,0, canvasSize, canvasSize)

console.log(map)



map.forEach((x,xi) => {
    x.forEach((y,yi) => {
        let posx=elementsSize*(yi)
        let posy=elementsSize*(xi+1)
        if(y=='O' && !playerPosition.x &&!playerPosition.y){
            playerPosition.x=posx;
            playerPosition.y=posy;

        }
        else if(y=='I'){
            giftPosition.x=posx
            giftPosition.y=posy
        }
        else if (y == 'X') {
            enemyPositions.push({
              x: posx,
              y: posy,
            });
          }
    
        game.fillText(emojis[y], posx, posy)
    })
});

moveplayer();
showLives();

}
function setcanvasSize(){
    if(window.innerHeight > window.innerWidth){
        canvasSize=window.innerWidth * 0.8
    }
    else{
        canvasSize=window.innerHeight * 0.8
    }
canvas.setAttribute('width', canvasSize)
canvas.setAttribute('height', canvasSize)
elementsSize=(canvasSize/10)-1;
console.log(elementsSize)
startGame();
}
window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);
function moveplayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;
    if(giftCollision){
        levelWin();
    }
    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
      });
      
      if (enemyCollision) {
        levelFail();
      }
    
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}
function levelWin(){
    level++;
    startGame();
}
function levelFail(){
   if(lives>1){
    lives--;
   }
   else{
    lives=3;
    level=0;
   }
   playerPosition.x=undefined;
   playerPosition.y=undefined;

    startGame();
}
function showLives() {
    const heartsArray = Array(lives).fill(emojis['HEART']); // [1,2,3]
    
    spanLives.innerHTML = "";
    heartsArray.forEach(heart => spanLives.append(heart));
  }
  function showTime() {
    spanTime.innerHTML = Date.now() - timeStart;
  }
function moveUp(){
    if(playerPosition.y>(elementsSize+1)){
        playerPosition.y-=elementsSize
    }
    

    startGame();
}
function moveDown(){
    if(playerPosition.y<elementsSize*10){
        playerPosition.y+=elementsSize
    }
    

    startGame();
}
function moveRight(){
    if(playerPosition.x<(9*elementsSize)){
        playerPosition.x+=elementsSize
    }
    

    startGame();
}
function moveLeft(){
    if(playerPosition.x>0){
        playerPosition.x-=elementsSize
    }
    

    startGame();
}
function moveByKeys(event) {
    console.log(event)
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}
